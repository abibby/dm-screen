import { h, render } from 'preact'
import { CharacterGenerator } from 'components/character-generator'
import { Checks } from 'components/checks'
import styled, { css } from 'styled-components'

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
    ${props => css`
        grid-column: span ${props.width ?? 1};
        grid-row: span ${props.height ?? 1};
    `}
`

render(
    <Grid>
        <Section>
            <CharacterGenerator />
        </Section>
        <Section width={2} height={2}>
            <Checks />
        </Section>
    </Grid>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('app')!,
)
