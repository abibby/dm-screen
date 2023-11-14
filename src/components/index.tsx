import { FunctionalComponent, h } from 'preact'
import { useCallback, useEffect, useState } from 'preact/hooks'
import styled from 'styled-components'
import { createStore, get, set, keys } from 'idb-keyval'
import { EventEmitter } from 'events'

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
    options: ReadonlyArray<string | readonly [string, string]>
}
export const Select: FunctionalComponent<SelectProps> = props => {
    return (
        <select {...{ ...props, options: undefined }}>
            {props.options.map(option => {
                if (typeof option === 'string')
                    return <option value={option}>{option}</option>

                return <option value={option[0]}>{option[1]}</option>
            })}
        </select>
    )
}

const permStore = createStore('permanent-state', 'permanent-state')
const permEvents = new EventEmitter()

export function usePermanentState<T>(
    key: string,
    initialState: T,
): [T, (value: T | ((previousState: T) => T)) => void] {
    const [value, setValue] = useState(initialState)

    useEffect(() => {
        const c = async (value: T) => {
            setValue(value)
            await set(key, value, permStore)
        }
        permEvents.on(key, c)
        keys(permStore).then(async keys => {
            if (keys.find(k => k === key)) {
                const val = await get(key, permStore)
                setValue(val)
            }
        })
        return () => {
            return permEvents.off(key, c)
        }
    }, [])

    return [
        value,
        useCallback(
            newValue => {
                if (newValue instanceof Function) {
                    newValue = newValue(value)
                }
                permEvents.emit(key, newValue)
            },
            [key, permEvents],
        ),
    ]
}
