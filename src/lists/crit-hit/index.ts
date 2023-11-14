import ArrowBolt from './arrow-bolt'
import Blunt from './blunt'
import Bullet from './bullet'
import Cutting from './cutting'
import FlameEnergy from './flame-energy'
import Piercing from './piercing'

export type BodyPart = 'arm' | 'body' | 'head' | 'leg'

export const typeMap = {
    'arrow-bolt': ArrowBolt,
    blunt: Blunt,
    bullet: Bullet,
    cutting: Cutting,
    'flame-energy': FlameEnergy,
    piercing: Piercing,
}

export type AttackType = keyof typeof typeMap

export function types(): Array<AttackType> {
    return Object.keys(typeMap) as Array<AttackType>
}

export const bodyParts = Object.keys(ArrowBolt) as readonly BodyPart[]
export const attackTypes = Object.keys(typeMap) as readonly AttackType[]

function clamp(value: number, max: number, min: number): number {
    return Math.max(Math.min(Math.round(value), max), min)
}

function linearInterpolate(
    val: number,
    min: number,
    max: number,
    newMin: number,
    newMax: number,
): number {
    const mag = max - min
    const newMag = newMax - newMin
    return (newMag / mag) * (val - min) + newMin
}

export function severity(
    maxHP: number,
    currentHP: number,
    d100: number,
): number {
    const val =
        14 ** (1 - currentHP / maxHP) +
        linearInterpolate(maxHP, 20, 500, 12, 1) **
            (clamp(d100, 100, 0) / 100) -
        2
    return clamp(Math.round(val), 14, 0)
}

export function crit(
    attackType: AttackType,
    bodyPart: BodyPart,
    sev: number,
): string {
    if (typeMap[attackType] === undefined) {
        throw new Error(`invalid attack type ${attackType}`)
    }
    if (typeMap[attackType][bodyPart] === undefined) {
        throw new Error(`invalid body part ${bodyPart}`)
    }

    return typeMap[attackType][bodyPart][sev]
}
