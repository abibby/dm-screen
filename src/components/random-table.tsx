import { FunctionalComponent, h } from 'preact'
import { randomFromList, totalWeight, WeightedList } from '@/lists'
import { Title, useDie } from '@/components'
import { bindValue } from '@zwzn/spicy'

interface Props {
    title: string
    table: WeightedList
}

export const RandomTable: FunctionalComponent<Props> = props => {
    const dieSize = totalWeight(props.table)
    const [dieRoll, setDieRoll, rollDie] = useDie(dieSize)

    return (
        <div>
            <Title>{props.title}</Title>
            <button onClick={rollDie}>Roll D{dieSize}</button>
            <input
                type='number'
                min={1}
                max={dieSize}
                value={dieRoll}
                onInput={bindValue(setDieRoll)}
            />
            <p>{randomFromList(props.table, dieRoll - 1)}</p>
        </div>
    )
}
