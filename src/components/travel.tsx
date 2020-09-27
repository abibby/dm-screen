import { Table, Title } from 'components'
import { FunctionalComponent, h } from 'preact'

export const Travel: FunctionalComponent = props => (
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
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fast</td>
                    <td>400ft</td>
                    <td>4 miles</td>
                    <td>30 miles</td>
                    <td>-5 Passive Perception</td>
                </tr>
            </tbody>
        </Table>
    </div>
)
