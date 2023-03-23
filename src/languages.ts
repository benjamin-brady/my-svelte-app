// These import styles work in `vite dev` and `vite build && vite preview` but are broken when running the bundle under a node docker image
//import { ita, por, pol, rus, jpn, heb, slk, slv, ara, tur, kor } from 'stopword';
//import { ita, por, pol, rus, jpn, heb, slk, slv, ara, tur, kor } from 'stopword/dist/stopword.esm.mjs';

// Works with vite build but it's much uglier
import { ita, por, pol, rus, jpn, heb, slk, slv, ara, tur, kor }  from '../node_modules/stopword/dist/stopword.esm.mjs'; 

export enum LanguageCode {
    English = 'en',
    French = 'fr',
    Spanish = 'es',
    German = 'de',
    Dutch = 'nl',
    Italian = 'it',
    Portuguese = 'pt',
    Polish = 'pl',
    Russian = 'ru',
    Japanese = 'ja',
    Hebrew = 'he',
    Slovene = "sl",
    Slovak = "sk",
    Arabic = "ar",
    Turkish = "tr",
    Korean = "ko",
}
export interface Language {
    code: LanguageCode,
    languageName: string,
    languageNameLocalized: string,
    // A list of words that are commonly used in the language.
    stopWords: string[],
    direction: 'ltr' | 'rtl',
    wikiSite: string,
    // ISO 639-3 language code. e.g. 'fra' for French
    code3: string,
    flag: string,
}

const englishStopWords = ["a","aboard","about","above","across","after","against","along","amid","among","an","and","are","around","as","at","because","be","been","being","before","behind","below","beneath","beside","between","beyond","but","by","concerning","considering","despite","down","during","except","had","have","following","for","from","if","in","inside","into","is","it","like","minus","near","next","of","off","on","onto","opposite","or","out","outside","over","past","per","plus","regarding","round","save","since","than","that","the","there","this","through","till","to","toward","under","underneath","unlike","until","up","upon","versus","via","was","were","which","with","within","without"]
const english = {
    code: LanguageCode.English,
    languageName: 'English',
    languageNameLocalized: 'English',
    // a list of english stop words
    stopWords: englishStopWords,
    direction: 'ltr',
    wikiSite: 'enwiki',
    code3: 'eng',
    flag: '🇬🇧'
} as Language

const french = {
    code: LanguageCode.French,
    languageName: 'French',
    languageNameLocalized: 'Français',
    // a list of french stop words
    stopWords: ['a', 'au', 'aux', 'avec', 'ce', 'ces', 'dans', 'de', 'des', 'du', 'elle', 'en', 'et', 'eux', 'il', 'je', 'la', 'le', 'leur', 'lui', 'ma', 'mais', 'me', 'même', 'mes', 'moi', 'mon', 'ne', 'ou', 'où', 'par', 'pour', 'qu', 'que', 'qui', 'sur', 'un', 'une', 'c', 'd', 'j', 'l', 'à', 'm', 'n', 's', 't', 'y', 'ceci', 'cela', 'cet', 'cette', 'ici', 'ils', 'les','quel', 'quels', 'quelle', 'quelles', 'sans', 'soi'],
    direction: 'ltr',
    wikiSite: 'frwiki',
    code3: 'fra',
    flag: '🇫🇷',
} as Language

const spanish = {
    code: LanguageCode.Spanish,
    languageName: 'Spanish',
    languageNameLocalized: 'Español',
    // a list of spanish stop words
    stopWords: ['a', 'un', 'el', 'ella', 'y', 'sobre', 'de', 'la', 'que', 'en', 'los', 'del', 'se', 'las', 'por', 'un', 'para', 'con', 'no', 'una', 'su', 'al', 'lo', 'como', 'pero', 'sus', 'le', 'ya', 'o', 'porque', 'sin', 'sobre', 'también', 'me', 'hasta', 'donde', 'quien', 'desde', 'nos', 'durante', 'uno', 'ni', 'contra', 'mí', 'qué', 'él', 'cual', 'mi', 'tú', 'te', 'ti', 'sí'],
    direction: 'ltr',
    wikiSite: 'eswiki',
    code3: 'spa',
    flag: '🇪🇸',
} as Language

const deutsch = {
    code: LanguageCode.German,
    languageName: 'German',
    languageNameLocalized: 'Deutsch',
    // a list of german stop words
    stopWords: ['a', 'ab', 'aber', 'ach', 'ag', 'alle', 'allem', 'allen', 'aller', 'allerdings', 'alles', 'als', 'also', 'am', 'an', 'au', 'auch', 'auf', 'aus', 'ausser', 'ausserdem', 'außer', 'außerdem', 'b', 'bald', 'bei', 'beide', 'beiden', 'beim', 'bereits', 'besonders', 'bin', 'bis', 'bisher', 'bist', 'c', 'd', 'd.h', 'da', 'dabei', 'dadurch', 'dafür', 'dagegen', 'daher', 'dahin', 'dahinter', 'damals', 'damit', 'danach', 'daneben', 'dank', 'dann', 'daran', 'darauf', 'daraus', 'darf', 'darin', 'darum', 'darunter', 'darüber', 'das', 'dasein', 'daselbst', 'dass', 'davon', 'davor', 'dazu', 'dazwischen', 'daß', 'dem', 'dementsprechend', 'demgegenüber', 'demgemäss', 'demgemäß', 'demselben', 'demzufolge', 'den', 'denen', 'denn', 'denselben', 'der', 'deren', 'derer', 'derjenige', 'derjenigen', 'dermassen', 'dermaßen', 'derselbe', 'derselben', 'des', 'deshalb', 'desselben', 'dessen', 'deswegen', 'die', 'diejenige', 'diejenigen', 'doch', 'drin', 'durch', 'durchaus', 'e', 'eben', 'ebenso', 'eigen', 'eigene', 'eigenen', 'eigener', 'eigenes', 'ein', 'einander', 'eine', 'einem', 'einen', 'einer', 'eines', 'einig', 'einige', 'einigem', 'einigen', 'einiger', 'einiges', 'einmal', 'en', 'ende', 'endlich', 'entweder', 'er', 'es', 'etwa', 'f', 'für', 'g', 'gar', 'her', 'hin', 'i', 'im', 'in', 'indem', 'infolgedessen', 'ins', 'irgend', 'j', 'ja', 'je', 'k', 'l', 'los', 'm', 'n', 'na', 'nach', 'nachdem', 'o', 'ob', 'oben', 'p', 'q', 'r', 's', 'sa', 'so', 't', 'u', 'um', 'und', 'unter', 'v', 'vom', 'von', 'vor', 'w', 'x', 'y', 'z', 'z.b', 'zu', 'zum', 'zur', 'zwar', 'zwischen'],
    direction: 'ltr',
    wikiSite: 'dewiki',
    code3: 'deu',
    flag: '🇩🇪',
} as Language

const netherlands = {
    code: LanguageCode.Dutch,
    languageName: 'Dutch',
    languageNameLocalized: 'Nederlands',
    // a list of dutch stop words
    stopWords: ['aan', 'af', 'al', 'alles', 'als', 'altijd', 'bij', 'daar', 'dan', 'dat', 'de', 'der', 'deze', 'die', 'dit', 'doch', 'door', 'dus', 'en', 'er', 'ge', 'haar', 'had', 'heeft', 'hem', 'het', 'hier', 'hij', 'hoe', 'hun', 'iemand', 'iets', 'ik', 'in', 'is', 'ja', 'je ', 'maar', 'me', 'na', 'naar', 'niet', 'niets', 'nog', 'nu', 'of', 'om', 'omdat', 'ons', 'ook', 'op', 'over', 'reeds', 'te', 'tegen', 'toch', 'u', 'uit', 'uw', 'van', 'voor', 'want', 'wat', 'we', 'wel', 'wie', 'wij', 'wil', 'zal', 'ze', 'zij', 'zo', 'zonder', 'zou'],
    direction: 'ltr',
    wikiSite: 'nlwiki',
    code3: 'nld',
    flag: '🇳🇱',
} as Language

const italian = {
    code: LanguageCode.Italian,
    languageName: 'Italian',
    languageNameLocalized: 'Italiano',
    // a list of italian stop words
    stopWords: ita,
    direction: 'ltr',
    wikiSite: 'itwiki',
    code3: 'ita',
    flag: '🇮🇹',
} as Language

const portuguese = {
    code: LanguageCode.Portuguese,
    languageName: 'Portuguese',
    languageNameLocalized: 'Português',
    // a list of portuguese stop words
    stopWords: por,
    direction: 'ltr',
    wikiSite: 'ptwiki',
    code3: 'por',
    flag: '🇵🇹',
} as Language

const polish = {
    code: LanguageCode.Polish,
    languageName: 'Polish',
    languageNameLocalized: 'Polski',
    // a list of polish stop words
    stopWords: pol,
    direction: 'ltr',
    wikiSite: 'plwiki',
    code3: 'pol',
    flag: '🇵🇱',
} as Language

const slovak = {
    code: LanguageCode.Slovak,
    languageName: 'Slovak',
    languageNameLocalized: 'Slovak',
    // a list of slovak stop words
    stopWords: slk,
    direction: 'ltr',
    wikiSite: 'skwiki',
    code3: 'slk',
    flag: '🇸🇰',
} as Language

const slovene = {
    code: LanguageCode.Slovene,
    languageName: 'Slovene',
    languageNameLocalized: 'Slovenščina',
    // a list of slovene stop words
    stopWords: ['ali', 'bi', 'bil', 'bila', 'bile', 'bili', 'bilo', 'biti', 'blizu', 'bo', 'bodo', 'bojo', 'bom', 'bomo', 'boste', 'bova', 'boš', 'brez', 'da', 'daleč', 'do', 'dokler', 'dol', 'etc.', 'ga', 'gor', 'idr.', 'in', 'iz', 'je', 'k', 'h', 'kadarkoli', 'kaj', 'kajti', 'kako', 'kakor', 'kamor', 'kamorkoli', 'kar', 'karkoli', 'katerikoli', 'kdaj', 'kdo', 'kdorkoli', 'ker', 'ki', 'kje', 'kjer', 'kjerkoli', 'ko', 'koder', 'koderkoli', 'koga', 'komu', 'kot', 'med', 'medtem', 'mene', 'mnogo', 'na', 'nad', 'naj', 'nato', 'nazaj', 'ne', 'nedavno', 'ni', 'nikamor', 'nikdar', 'nikjer', 'nikoli', 'nič', 'npr.', 'o', 'ob', 'od', 'okoli', 'oz.', 'pa', 'po', 'pod', 'poleg', 'ponovno', 'potem', 'pred', 'prej', 'preko', 'pri', 'proti', 's', 'saj', 'se', 'sem', 'si', 'sicer', 'skoraj', 'skozi', 'smo', 'so', 'spet', 'sta', 'ste', 'stran', 'sva', 'tako', 'ti', 'toda', 'tudi', 'u', 'v', 'vendar', 'ves', 'vi', 'vidva', 'vsa', 'vsaj', 'vsak', 'vsaka', 'vsakdo', 'vsake', 'vsaki', 'vsakomur', 'vse', 'vsega', 'vsi', 'vso', 'z', 'za', 'zadaj', 'zadnji', 'zakaj', 'zunaj', 'če', 'često', 'čez', 'čigav', 'že'],
    direction: 'ltr',
    wikiSite: 'slwiki',
    code3: 'slv',
    flag: '🇸🇮',
} as Language

const russian = {
    code: LanguageCode.Russian,
    languageName: 'Russian',
    languageNameLocalized: 'Русский',
    // a list of russian stop words
    stopWords: rus,
    direction: 'ltr',
    wikiSite: 'ruwiki',
    code3: 'rus',
    flag: '🇷🇺',
}

const hebrew = {
    code: LanguageCode.Hebrew,
    languageName: 'Hebrew',
    languageNameLocalized: 'עברית',
    // a list of hebrew stop words
    stopWords: heb,
    direction: 'rtl',
    wikiSite: 'hewiki',
    code3: 'heb',
    flag: '🇮🇱',
} as Language

const arabic = {
    code: LanguageCode.Arabic,
    languageName: 'Arabic',
    languageNameLocalized: 'العربية',
    // a list of arabic stop words
    stopWords: ara,
    direction: 'rtl',
    wikiSite: 'arwiki',
    code3: 'ara',
    flag: '🇸🇦',
}
const turkish = {
    code: LanguageCode.Turkish,
    languageName: 'Turkish',
    languageNameLocalized: 'Türkçe',
    // a list of turkish stop words
    stopWords: tur,
    direction: 'ltr',
    wikiSite: 'trwiki',
    code3: 'tur',
    flag: '🇹🇷',
}

// Most south east asian languages (jp, zh) don't work in Redactle because words are not delimited with spaces
const korean = {
    code: LanguageCode.Korean,
    languageName: 'Korean',
    languageNameLocalized: '한국어',
    // a list of korean stop words
    stopWords: kor,
    direction: 'ltr',
    wikiSite: 'kowiki',
    code3: 'kor',
    flag: '🇰🇷',
}

// These languages will be available in the UI
export const languages = {
    [LanguageCode.English]: english,
    [LanguageCode.French]: french,
    [LanguageCode.Spanish]: spanish,
    [LanguageCode.German]: deutsch,
    [LanguageCode.Dutch]: netherlands,
    [LanguageCode.Italian]: italian,
    [LanguageCode.Portuguese]: portuguese,
    [LanguageCode.Polish]: polish,
    [LanguageCode.Russian]: russian,
    [LanguageCode.Slovak]: slovak,
    [LanguageCode.Slovene]: slovene,
    [LanguageCode.Hebrew]: hebrew,
    [LanguageCode.Arabic]: arabic,
    [LanguageCode.Turkish]: turkish,
    [LanguageCode.Korean]: korean,
} as const

export function wordLookup(words: string[]) {
    const lookup: Record<string, boolean> = {}
    words.forEach(w => lookup[w]=true)
    return lookup
}