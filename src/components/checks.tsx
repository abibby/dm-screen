import { Title } from 'components'
import { checks } from 'lists/checks'
import { FunctionalComponent, h } from 'preact'

import styled from 'styled-components'

const Table = styled.table`
    border-collapse: collapse;
    --color: pink;
`
const TaskTitle = styled.th`
    background-color: var(--color);
`
const DC = styled.td`
    white-space: nowrap;
    background-color: var(--color);
`

export const Checks: FunctionalComponent = props => {
    return (
        <div>
            <Title>Checks</Title>
            {checks.map(([title, tasks]) => (
                <div>
                    <h2>{title}</h2>
                    <Table>
                        {tasks.map(([title, dcs]) => (
                            <tbody>
                                <tr>
                                    <TaskTitle colSpan={3}>{title}</TaskTitle>
                                </tr>
                                {dcs.map(([dificulty, dc, disc]) => (
                                    <tr>
                                        {dificulty && <td>{dificulty}</td>}
                                        <DC colSpan={dificulty ? 1 : 2}>
                                            {dc}
                                        </DC>
                                        <td>{disc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        ))}
                    </Table>
                </div>
            ))}
        </div>
    )
}
