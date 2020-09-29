export * from './races'
export * from './gods'
export * from './alignments'
export * from './wtf-character'

export type WeightedList = ReadonlyArray<readonly [number, string] | string>

export interface Corpus {
    template: WeightedList
    [key: string]: WeightedList | undefined
}

function applyWeights(
    arr: WeightedList,
): ReadonlyArray<readonly [number, string]> {
    return arr.map((e): readonly [number, string] => {
        if (typeof e === 'string') {
            return [1, e]
        }
        return e
    })
}

export function totalWeight(arr: WeightedList): number {
    return applyWeights(arr).reduce((total, [current]) => total + current, 0)
}

export function randomFromList(arr: WeightedList, roll?: number): string {
    if (arr.length === 0) {
        return ''
    }
    const weightedArr = applyWeights(arr)

    let acc = 0
    const accumulatedArr = weightedArr.map(([weight, e]): readonly [
        number,
        string,
    ] => [(acc = weight + acc), e])

    const rand = roll ?? Math.random() * totalWeight(arr)
    const result =
        accumulatedArr[
            accumulatedArr.filter(([weight]) => weight <= rand).length
        ]
    if (result === undefined) {
        return ''
    }
    return result[1]
}

function buildRexExp(corpus: Corpus): RegExp {
    const types = Object.keys(corpus).sort(function (a, b) {
        if (a.length == b.length) {
            return 0
        }
        return a.length > b.length ? -1 : 1
    })

    return new RegExp(`@(${types.join('|')})`, 'gi')
}

export function generate(corpus: Corpus): string {
    const regex = buildRexExp(corpus)
    let type: string
    let text: string
    let part: string
    let iter = 0 // Safety mechanism
    let idea = randomFromList(corpus.template)
    let item = regex.exec(idea)

    while (item && ++iter < 1000) {
        type = item[0]
        text = item[1]

        part = randomFromList(corpus[text] ?? [])
        idea = idea.replace(type, part)

        regex.lastIndex = 0
        item = regex.exec(idea)
    }

    return idea
}
