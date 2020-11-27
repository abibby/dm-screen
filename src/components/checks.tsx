import { Table, Title } from 'components'
import { FunctionalComponent, h } from 'preact'

type ArrayMap<K, V> = [K, V][]

const skills: ArrayMap<string, string> = [
    ['Str', 'Athletics'],
    ['Dex', 'Acrobatics, Slight of Hand, Stealth'],
    ['Con', 'N/A'],
    ['Int', 'Arcana, History, Investigation, Nature, Religion'],
    ['Wis', 'Animal Handling, Insight, Medicine, Perception, Survival'],
    ['Cha', 'Deception, Intimidation, Performance, Persuasion'],
]
const difficulty: ArrayMap<string, string> = [
    ['Trivial', '5'],
    ['Easy', '10'],
    ['Moderate', '15'],
    ['Hard', '20'],
    ['Very Hard', '25'],
    ['Nearly Impossible', '30'],
]

// https://drive.google.com/drive/folders/0BwCtO5aw9n2LRl9CekVsZjJUd1k
// const strength: ArrayMap<string, ArrayMap<string, string>> = [
//     [
//         'Athletics',
//         [
//             [
//                 'Automatic',
//                 'Climb a wall with plenty of handholds or a secure, knotted rope or rope ladder; swim in relatively calm water; jump a number of feet horizontally equal to half of your Strength score, or your full Strength score with a 10 foot running start; leap into the air a number of feet equal to half of (3 + your Strength modifier), or the full amount with a 10 foot running start 2',
//             ],
//             [
//                 'Easy',
//                 'Climb a wall lacking an adequate amount of handholds, tread water in rough conditions, jump a few feet farther than you normally could; during a long jump, clear an obstacle such as a low-lying hedge or wall of height a fourth of the jump’s distance ',
//             ],
//             [
//                 'Moderate',
//                 'Climb a rope dangling from a protrusion or overhang (i.e. lacking a vertical surface to brace against), swim in rough water or against a mild current',
//             ],
//             [
//                 'Hard',
//                 'Climb a wall with very few handholds, catch yourself on a rope or other handhold in the middle or at the end of your jump, swim in violent water or against a strong current',
//             ],
//             [
//                 'Very Hard',
//                 'Climb a slippery or sheer wall with little or no handholds, climb vertically along an overhang with adequate handholds, swim in stormy waters',
//             ],
//         ],
//     ],
//     [
//         'Feats of Strength • Other',
//         [
//             [
//                 'Easy',
//                 'Force open a stuck or broken door, break free from weak bindings, pull a stuck or wedged object loose',
//             ],
//             [
//                 'Moderate',
//                 'Break through a wooden door reinforced with iron, hang on to a wagon while being dragged behind it',
//             ],
//             [
//                 'Hard',
//                 'Break through a heavy locked or barred door, topple a stone statue',
//             ],
//             [
//                 'Very Hard',
//                 'Break through a heavy, reinforced door such as a prison or armory door, hold a door shut against a room filling with water',
//             ],
//         ],
//     ],
// ]

// const charisma: ArrayMap<string, ArrayMap<string, string>> = [
//     [
//         "Friendly Creature's Reaction",
//         [
//             [
//                 '0',
//                 'The creature does as asked without taking risks or making sacrifices.',
//             ],
//             [
//                 '10',
//                 'The creature accepts a minor risk or sacrifice to do as asked.',
//             ],
//             [
//                 '20',
//                 'The creature accepts a significant risk or sacrifice to do as asked.',
//             ],
//         ],
//     ],
//     [
//         "Indifferent Creature's Reaction",
//         [
//             ['0', 'The creature offers no help but does no harm.'],
//             [
//                 '10',
//                 'The creature does as asked as long as no risks or sacrifices are involved.',
//             ],
//             [
//                 '20',
//                 'The creature accepts a minor risk or sacrifice to do as asked.',
//             ],
//         ],
//     ],
//     [
//         "Hostile Creature's Reaction",
//         [
//             [
//                 '0',
//                 "The creature opposes the adventurers' actions and might take risks to do so.",
//             ],
//             ['10', 'The creature offers no help but does no harm.'],
//             [
//                 '20',
//                 'The creature does as asked as long as no risks or sacrifices are involved.',
//             ],
//         ],
//     ],
// ]

export const Checks: FunctionalComponent = props => {
    return (
        <div>
            <Title>Checks</Title>
            <Table>
                <thead>
                    <tr>
                        <th>Ability</th>
                        <th>Skills</th>
                    </tr>
                </thead>
                <tbody>{toTable(skills)}</tbody>
            </Table>
            <Table>
                <thead>
                    <tr>
                        <th>Difficulty</th>
                        <th>DC</th>
                    </tr>
                </thead>
                <tbody>{toTable(difficulty)}</tbody>
            </Table>
            {/* <Table>
                <thead>
                    <tr>
                        <th colSpan={2}>Charisma</th>
                    </tr>
                </thead>
                {charisma.map(([relationship, tbl]) => (
                    <tbody>
                        <tr>
                            <th colSpan={2}>{relationship}</th>
                        </tr>
                        {toTable(tbl)}
                    </tbody>
                ))}
            </Table>
            {strength.map(([skill, examples]) => (
                <div>
                    <h3>{skill}</h3>
                    <div>
                        {examples.map(([difficulty, example]) => (
                            <div>
                                <h4>{difficulty}</h4>
                                <p>{example}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))} */}
        </div>
    )
}

function toTable(arr: string[][]) {
    return arr.map(row => (
        <tr>
            {row.map(cell => (
                <td>{cell}</td>
            ))}
        </tr>
    ))
}
