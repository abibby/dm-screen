import { FunctionalComponent, h } from 'preact'
import { useCallback, useEffect, useState } from 'preact/hooks'
import { generate, wtfCorpus } from 'lists'

export const CharacterGenerator: FunctionalComponent = props => {
    const [seed, setSeed] = useState(0)
    const shuffle = useCallback(() => setSeed(Math.random()), [setSeed])
    useEffect(() => shuffle(), [shuffle])

    return (
        <div>
            <h1>Character Generator</h1>
            <button onClick={shuffle}>Shuffle</button>
            <p>{generate(wtfCorpus, seed)}</p>
        </div>
    )
}
