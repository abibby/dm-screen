import { FunctionalComponent, h } from 'preact'
import { useCallback, useEffect, useState } from 'preact/hooks'
import styled from 'styled-components'

export const Title = styled.h2`
    background-color: black;
    color: white;
    margin-top: -5px;
    margin-left: -5px;
    margin-right: -5px;
    padding: 0 5px;
`

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;

    > thead {
        background-color: #333;
        color: white;
        td,
        th {
            border-left: 1px solid white;
            border-right: 1px solid white;
        }
    }
    > tbody {
        > tr:nth-child(even) {
            background-color: #eee;
        }
    }
`

export function useDie(
    dieSize: number,
): [number, (value: string) => void, () => void] {
    const [dieRoll, setDieRoll] = useState('0')
    const shuffle = useCallback(
        () => setDieRoll(String(Math.floor(Math.random() * dieSize) + 1)),
        [setDieRoll],
    )
    useEffect(() => shuffle(), [shuffle])
    return [Number(dieRoll), setDieRoll, shuffle]
}

interface SelectProps extends h.JSX.HTMLAttributes<HTMLSelectElement> {
    options: readonly string[]
}
export const Select: FunctionalComponent<SelectProps> = props => {
    const noOptionsProps: any = { ...props }
    delete noOptionsProps.options
    return (
        <select {...noOptionsProps}>
            {props.options.map(option => (
                <option value={option}>{option}</option>
            ))}
        </select>
    )
}
