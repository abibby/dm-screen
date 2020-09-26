export * from './races'
export * from './gods'
export * from './alignments'

export function randomFromList(
    arr: ReadonlyArray<readonly [number, string] | string>,
    seed?: number,
): string {
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
