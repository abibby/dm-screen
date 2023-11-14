import { bindValue } from '@zwzn/spicy'
import { Table, Title } from '@/components'
import { FunctionalComponent, h } from 'preact'
import { useState } from 'preact/hooks'
import styled from 'styled-components'

const SpeedInput = styled.input`
    width: 40px;
`

export const Travel: FunctionalComponent = props => {
    const [strSpeed, setSpeed] = useState('30')
    const speed = Number(strSpeed)
    const feetToMiles = 1 / 5280
    const minuteSpeed = speed * 10
    const hourSpeed = Math.floor(minuteSpeed * 60 * feetToMiles)
    const daySpeed = hourSpeed * 8
    return (
        <div>
            <Title>Travel</Title>
            <Table>
                <thead>
                    <tr>
                        <th rowSpan={2}>Pace</th>
                        <th colSpan={3}>Distance Per</th>
                        <th rowSpan={2}>Effect</th>
                    </tr>
                    <tr>
                        <th>Minute</th>
                        <th>Hour</th>
                        <th>Day</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Slow</td>
                        <td>200ft</td>
                        <td>2 miles</td>
                        <td>18 miles</td>
                        <td>Able to stealth</td>
                    </tr>
                    <tr>
                        <td>Normal</td>
                        <td>300ft</td>
                        <td>3 miles</td>
                        <td>34 miles</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Fast</td>
                        <td>400ft</td>
                        <td>4 miles</td>
                        <td>30 miles</td>
                        <td>-5 Passive Perception</td>
                    </tr>
                    <tr>
                        <td>
                            <SpeedInput
                                type='number'
                                placeholder='Base speed'
                                value={strSpeed}
                                onInput={bindValue(setSpeed)}
                            />
                        </td>
                        <td>{minuteSpeed}ft</td>
                        <td>{hourSpeed} miles</td>
                        <td>{daySpeed} miles</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
