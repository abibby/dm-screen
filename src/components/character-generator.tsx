import { FunctionalComponent, h } from 'preact'
import { useCallback, useEffect, useState } from 'preact/hooks'
import { alignments, gods, races, randomFromList } from 'lists'

export const CharacterGenerator: FunctionalComponent = props => {
    const [seed, setSeed] = useState(0)
    const shuffle = useCallback(() => setSeed(Math.random()), [setSeed])
    useEffect(() => shuffle(), [shuffle])

    return (
        <div>
            <h1>Character Generator</h1>
            <button onClick={shuffle}>Shuffle</button>
            <table>
                <tbody>
                    <tr>
                        <td>Race:</td>
                        <td>{randomFromList(races, seed)}</td>
                    </tr>
                    <tr>
                        <td>Alignment:</td>
                        <td>{randomFromList(alignments, seed)}</td>
                    </tr>
                    <tr>
                        <td>God:</td>
                        <td>{randomFromList(gods, seed)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
