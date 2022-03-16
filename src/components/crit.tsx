import { FunctionalComponent, h } from 'preact'
import { useState } from 'preact/hooks'
import { Select, Title, useDie } from 'components'
import { bindValue } from '@zwzn/spicy'
import {
    AttackType,
    BodyPart,
    severity,
    attackTypes,
    bodyParts,
    typeMap,
} from 'lists/crit-hit'
import styled, { css } from 'styled-components'

const HPInput = styled.input`
    width: 40px;
`

const EffectList = styled.ol`
    > li:nth-child(even) {
        background-color: #eee;
    }
`

const EffectListElement = styled.li<{ active: boolean }>`
    ${props =>
        props.active
            ? css`
                  background-color: #f55 !important;
              `
            : undefined}
`

// (test|-\d+ ?%)

export const Crit: FunctionalComponent = props => {
    const [attackType, setAttackType] = useState('arrow-bolt')
    const [bodyPart, setBodyPart] = useState('arm')
    const [maxHP, setMaxHP] = useState('50')
    const [currentHP, setCurrentHP] = useState('50')
    const [dieRoll, setDieRoll, rollDie] = useDie(100)

    return (
        <div>
            <Title>Crit Hit</Title>
            <Select
                options={attackTypes}
                value={attackType}
                onInput={bindValue(setAttackType)}
            />
            <Select
                options={bodyParts}
                value={bodyPart}
                onInput={bindValue(setBodyPart)}
            />
            <br />
            <HPInput
                type='number'
                value={currentHP}
                onInput={bindValue(setCurrentHP)}
            />
            {' / '}
            <HPInput
                type='number'
                value={maxHP}
                onInput={bindValue(setMaxHP)}
            />
            {' HP'}
            <br />

            <button onClick={rollDie}>Roll D100</button>
            <input
                type='number'
                min={1}
                max={100}
                value={dieRoll}
                onInput={bindValue(setDieRoll)}
            />
            <p>
                <EffectList>
                    {typeMap[attackType as AttackType][
                        bodyPart as BodyPart
                    ].map((effect, i) => (
                        <EffectListElement
                            key={i}
                            active={
                                i ===
                                severity(
                                    Number(maxHP),
                                    Number(currentHP),
                                    dieRoll,
                                )
                            }
                        >
                            {effect}
                        </EffectListElement>
                    ))}
                </EffectList>
            </p>
        </div>
    )
}
