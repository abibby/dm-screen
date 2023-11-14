import { Corpus } from '@/lists'
import { alignments } from './alignments'
import { gods } from './gods'
import { races } from './races'

export const wtfEstablishment: Corpus = {
    template: [
        '@size @atmosphere @type that @sensesTemplate with @people inside',
    ],

    race: races,
    alignment: alignments,
    god: gods,

    size: ['a tiny', 'a small', 'a medium', 'a large', 'a huge'],

    type: [
        'inn',
        'temple to @god',
        '@type that is actually a drug front',
        'bakery',
        'barracks',
        'thieves guild',
        'black smith',
        '@type the mob uses to hang out',
        'combination @type and @type',
        'mill',
        'butcher',
        'vineyard',
        'tannery',
        'grocers',
        "carpenter's",
        'restaurant',
        'bar',
        "wizard's tower",
        'dock',
        'warehouse',
        'brothel',
        'barber shop',
        'distillery',
        'brewery',
        'house',
        "herbalist's",
        'theater',
        "potter's",
        'police station',
    ],

    atmosphere: [
        'amused',
        'angry',
        'apathetic',
        'blissful',
        'calm',
        'cheerful',
        'content',
        'depressing',
        'dreamy',
        'energetic',
        'exciting',
        'frighting',
        'forboding',
        'frustrating',
        'gloomy',
        'happy',
        'hopeful',
        'humorous',
        'idyllic',
        'indifferent',
        'irritating',
        'joyful',
        'lighthearted',
        'lonely',
        'loving',
        'melancholy',
        'mellow',
        'mysterious',
        'ominous',
        'optimistic',
        'peaceful',
        'pessimistic',
        'relaxed',
        'romantic',
        'sad',
        'silly',
        'stressed',
        'tense',
        'weird',
        'whimsical',
    ],

    sensesTemplate: ['@senses', '@senses and @senses'],

    senses: [
        'feels @touch',
        [0.5, 'tastes @taste'],
        'smells @smell',
        'sounds @sound',
    ],

    touch: [
        'chilly',
        'clammy',
        'cold',
        'cool',
        'crisp',
        'damp',
        'dirty',
        'dry',
        'dusty',
        'filthy',
        'flesh',
        'freezing',
        'frosty',
        'greasy',
        'grimy',
        'hot',
        'humid',
        'icy',
        'lukewarm',
        'moist',
        'mucky',
        'muggy',
        'mushy',
        'oily',
        'slick',
        'slimy',
        'slippery',
        'soggy',
        'steamy',
        'sticky',
        'tacky',
        'tepid',
        'warm',
        'waxy',
        'wet',
        'wobbly',
    ],
    taste: ['metallic', 'like blood'],
    smell: [
        [0.1, 'smelly'],
        'like old people',
        'like bread',
        'like rotten flesh',
        'fishy',
        'moldy',
        'minty',
        'mildewed',
        'skunky',
        'acid',
        'musty',
        'acrid',
        'nauseating',
        'airy',
        'perfumed',
        'biting',
        'pungent',
        'clean',
        'putrid',
        'crisp',
        'rancid',
        'dirty',
        'redolent',
        'earthy',
        'repulsive',
        'faint',
        'rotten',
        'feminine',
        'sharp',
        'fetid',
        'sour',
        'fishy',
        'spicy',
        'floral',
        'spoiled',
        'flowery',
        'stale',
        'fresh',
        'light',
        'sweaty',
        'loamy',
        'sweet',
        'masculine',
        'tart',
        'wispy',
    ],
    sound: [
        'boisterous',
        'low-pitched',
        'shrill',
        'brittle',
        'mellifluous',
        'silent',
        'calm',
        'melodic',
        'smooth',
        'clamorous',
        'melodious',
        'soft',
        'croaky',
        'muffled',
        'soundless',
        'discordant',
        'musical',
        'dissonant',
        'muted',
        'squeaky',
        'dull',
        'noiseless',
        'strong',
        'earsplitting',
        'noisy',
        'sweet',
        'enjoyable',
        'tacit',
        'faint',
        'penetrating',
        'talkative',
        'gentle',
        'piercing',
        'thundering',
        'gruff',
        'pleasing',
        'thunderous',
        'half-deafening',
        'quiet',
        'tranquil',
        'half-shouted',
        'rasping',
        'tuneful',
        'harmonious',
        'raspy',
        'unspoken',
        'harsh',
        'raucous',
        'unvoiced',
        'high',
        'resonant',
        'velvety',
        'high-pitched',
        'riotous',
        'vociferous',
        'hoarse',
        'rowdy',
        'voiceless',
        'husky',
        'screaky',
        'whispered',
        'loud',
        'screaming',
        'wordless',
        'low',
        'screechy',
    ],

    contentse: ['a small table'],

    people: [
        'no one',
        'a person',
        'two people',
        'a small group',
        'two small groups',
        'a large crowd',
    ],
}
