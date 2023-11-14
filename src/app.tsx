import { h, render } from 'preact'
import { CharacterGenerator } from '@/components/character-generator'
import { Checks } from '@/components/checks'
import styled, { css } from 'styled-components'
import { Travel } from '@/components/travel'
import { EstablishmentGenerator } from '@/components/establishment-generator'
import { RandomTable } from '@/components/random-table'
import { carousing } from '@/lists/carousing'
import { Crit } from '@/components/crit'
import { Weather } from '@/components/weather'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 250px;
    grid-gap: 10px;
`

interface SectionProps {
    width?: number
    height?: number
}

const Section = styled.div<SectionProps>`
    overflow: auto;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    padding: 5px;

    ${props => css`
        grid-column: span ${props.width ?? 1};
        grid-row: span ${props.height ?? 1};
    `}
`

render(
    <Grid>
        <Section width={2} height={3}>
            <Crit />
        </Section>
        <Section width={2} height={2}>
            <Checks />
        </Section>
        <Section width={2}>
            <Travel />
        </Section>
        <Section>
            <CharacterGenerator />
        </Section>
        <Section>
            <EstablishmentGenerator />
        </Section>
        <Section>
            <RandomTable title='Carousing' table={carousing} />
        </Section>
        <Section>
            <Weather />
        </Section>
    </Grid>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('app')!,
)
