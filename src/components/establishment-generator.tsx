import { FunctionalComponent, h } from 'preact'
import { useCallback, useEffect, useState } from 'preact/hooks'
import { generate } from 'lists'
import { Title } from 'components'
import { wtfEstablishment } from 'lists/wtf-establishment'

export const EstablishmentGenerator: FunctionalComponent = props => {
    const [text, setText] = useState('')
    const shuffle = useCallback(() => setText(generate(wtfEstablishment)), [
        setText,
    ])
    useEffect(() => shuffle(), [shuffle])

    return (
        <div>
            <Title>Establishment</Title>
            <button onClick={shuffle}>New Establishment</button>
            <p>{text}</p>
        </div>
    )
}
