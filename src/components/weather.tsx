import { FunctionalComponent, h } from 'preact'
import { Title, usePermanentState } from '@/components'
import { useCallback } from 'preact/hooks'

const conditions = [
    [
        'precipitation',
        [
            'Clear',
            'Light clouds',
            'Overcast or ground fog',
            'Rain, hail, or snow',
            'Torrential rain, driving hail, or blizzard',
        ],
    ],
    ['temperature', ['mild', 'moderate', 'high', 'extreme']],
    ['wind', ['Calm', 'Moderate wind', 'Strong wind', 'Gale', 'Storm']],
] as const

export const Weather: FunctionalComponent = props => {
    const [weather, setWeather] = usePermanentState<number[]>(
        'weather',
        conditions.map(() => 0),
    )
    const c = useCallback(() => {
        setWeather(
            conditions.map(([, list]) =>
                Math.floor(Math.random() * list.length),
            ),
        )
    }, [])
    return (
        <div>
            <Title>Weather</Title>
            <button onClick={c}>Next Day</button>
            <ul>
                {conditions.map(([name, list], i) => (
                    <li>{list[weather[i]]}</li>
                ))}
            </ul>
        </div>
    )
}
