import './checks.scss'
import { checks } from 'lists/checks'
import { FunctionalComponent, h } from 'preact'

export const Checks: FunctionalComponent = props => {
    return (
        <div class='checks'>
            <h1>Checks</h1>
            {checks.map(([title, tasks]) => (
                <div>
                    <h2>{title}</h2>
                    <table class='table'>
                        {tasks.map(([title, dcs]) => (
                            <tbody>
                                <tr>
                                    <th class='skill-title' colSpan={3}>
                                        {title}
                                    </th>
                                </tr>
                                {dcs.map(([dificulty, dc, disc]) => (
                                    <tr>
                                        {dificulty && <td>{dificulty}</td>}
                                        <td
                                            class='dc'
                                            colSpan={dificulty ? 1 : 2}
                                        >
                                            {dc}
                                        </td>
                                        <td>{disc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        ))}
                    </table>
                </div>
            ))}
        </div>
    )
}
