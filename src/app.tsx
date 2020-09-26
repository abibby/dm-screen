import { h, render } from 'preact'
import { CharacterGenerator } from 'components/character-generator'
import { Checks } from 'components/checks'

render(
    <div>
        <CharacterGenerator />
        <Checks />
    </div>,
    document.getElementById('app')!,
)
