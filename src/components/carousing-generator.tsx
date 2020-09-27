import { FunctionalComponent, h } from 'preact'
import { useCallback, useEffect, useState } from 'preact/hooks'
import { randomFromList } from 'lists'
import { Title } from 'components'
import { carousing } from 'lists/carousing'

export const CarousingGenerator: FunctionalComponent = props => {
    const [text, setText] = useState('')
    const shuffle = useCallback(() => setText(randomFromList(carousing)), [
        setText,
    ])
    useEffect(() => shuffle(), [shuffle])

    return (
        <div>
            <Title>Carousing</Title>
            <button onClick={shuffle}>New Carousing</button>
            <p>{text}</p>
        </div>
    )
}
