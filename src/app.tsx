import { h, render } from 'preact'
import { CharacterGenerator } from 'components/character-generator'
import { Checks } from 'components/checks'
import styled, { css } from 'styled-components'
import { Travel } from 'components/travel'
import { EstablishmentGenerator } from 'components/establishment-generator'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 200px;
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

    ${props => css`
        grid-column: span ${props.width ?? 1};
        grid-row: span ${props.height ?? 1};
    `}
`

render(
    <Grid>
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
    </Grid>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('app')!,
)
