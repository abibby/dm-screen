export * from './races'
export * from './gods'
export * from './alignments'
export * from './wtf-dnd'

type WeightedList = ReadonlyArray<readonly [number, string] | string>

interface Corpus {
    template: WeightedList
    [key: string]: WeightedList | undefined
}

export function randomFromList(arr: WeightedList, seed?: number): string {
    if (seed === undefined) {
        seed = Math.random()
    }

    const weightedArr = arr.map((e): readonly [number, string] => {
        if (typeof e === 'string') {
            return [1, e]
        }
        return e
    })

    const totalWeight = weightedArr.reduce(
        (total, [current]) => total + current,
        0,
    )

    let acc = 0
    const accumulatedArr = weightedArr.map(([weight, e]): readonly [
        number,
        string,
    ] => [(acc = weight + acc), e])

    const rand = (seed * 12548458) % totalWeight
    return accumulatedArr[
        accumulatedArr.filter(([weight]) => weight <= rand).length
    ][1]
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

export function generate(corpus: Corpus, seed?: number): string {
    const regex = buildRexExp(corpus)
    let type: string
    let text: string
    let part: string
    let iter = 0 // Safety mechanism
    let idea = randomFromList(corpus.template, seed)
    let item = regex.exec(idea)

    while (item && ++iter < 1000) {
        type = item[0]
        text = item[1]

        part = randomFromList(corpus[text] ?? [], seed)
        idea = idea.replace(type, part)

        regex.lastIndex = 0
        item = regex.exec(idea)
    }

    return idea
}
