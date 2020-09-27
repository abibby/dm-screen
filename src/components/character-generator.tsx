import { FunctionalComponent, h } from 'preact'
import { useCallback, useEffect, useState } from 'preact/hooks'
import { generate, wtfCorpus } from 'lists'
import styled from 'styled-components'
import { Title } from 'components'

export const CharacterGenerator: FunctionalComponent = props => {
    const [seed, setSeed] = useState(0)
    const shuffle = useCallback(() => setSeed(Math.random()), [setSeed])
    useEffect(() => shuffle(), [shuffle])

    return (
        <div>
            <Title>WTF Character</Title>
            <button onClick={shuffle}>New Character</button>
            <p>{generate(wtfCorpus, seed)}</p>
        </div>
    )
}
