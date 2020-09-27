import { FunctionalComponent, h } from 'preact'
import { useCallback, useEffect, useState } from 'preact/hooks'
import { generate, wtfCharacter } from 'lists'
import { Title } from 'components'

export const CharacterGenerator: FunctionalComponent = props => {
    const [text, setText] = useState('')
    const shuffle = useCallback(() => setText(generate(wtfCharacter)), [
        setText,
    ])
    useEffect(() => shuffle(), [shuffle])

    return (
        <div>
            <Title>Character</Title>
            <button onClick={shuffle}>New Character</button>
            <p>{text}</p>
        </div>
    )
}
