export class Conjugator {
    constructor() {}

    conjugate() {
        return getConjugation();
    }
}

function getConjugation() {
    return {
        infinitive: "aller",
        englishName: "to go",
        helper: "etre",
        pronouns: {
            firstPersonSingular: { nominative: 'je', reflexive: 'me' },
            secondPersonSingular: { nominative: 'tu', reflexive: 'te' },
            thirdPersonSingular: { nominative: 'il/elle/on', reflexive: 'se' },
            firstPersonPlural: { nominative: 'nous', reflexive: 'nous' },
            secondPersonPlural: { nominative: 'vous', reflexive: 'vous' },
            thirdPersonPlural: { nominative: 'ils/elles', reflexive: 'se' }
        },
        tenses: {
            english: "to go",
            infinitive: "aller",
            reflexive: false,
            pastTenseHelper: "etre",
            pastParticiple: "allé",
            presentParticiple: "allant",
            present: {
                name: "Présent",
                firstPersonSingular: {value: "vais", fullText: "je vais"},
                secondPersonSingular: {value: "vas", fullText: "tu vas"},
                thirdPersonSingular: {value: "va", fullText: "il/elle/on va"},
                firstPersonPlural: {value: "allons", fullText: "nous allons"},
                secondPersonPlural: {value: "allez", fullText: "vous allez"},
                thirdPersonPlural: {value: "vont", fullText: "ils/elles vont"}
            },
            future: {
                name: "Futur",
                firstPersonSingular: {value: "irai", fullText: "j'irai"},
                secondPersonSingular: {value: "iras", fullText: "tu iras"},
                thirdPersonSingular: { value: 'ira', fullText: 'il/elle/on ira' },
                firstPersonPlural: { value: 'irons', fullText: 'nous irons' },
                secondPersonPlural: { value: 'irez', fullText: 'vous irez' },
                thirdPersonPlural: { value: 'iront', fullText: 'ils/elles iront' }
            },
            futureAnterior: {
                name: "Futur Antèrieur",
                firstPersonSingular: { value: 'serai allé(e)', fullText: 'je serai allé(e)' },
                secondPersonSingular: { value: 'seras allé(e)', fullText: 'tu seras allé(e)' },
                thirdPersonSingular: { value: 'sera allé(e)', fullText: 'il/elle/on sera allé(e)' },
                firstPersonPlural: { value: 'serons allé(e)s', fullText: 'nous serons allé(e)s' },
                secondPersonPlural: { value: 'serez allé(e)s', fullText: 'vous serez allé(e)s' },
                thirdPersonPlural: { value: 'seront allé(e)s', fullText: 'ils/elles seront allé(e)s' }
            },
            imperative: {
                name: "Impératif",
                firstPersonSingular: {value: "", fullText: ""},
                secondPersonSingular: {value: "Va!", fullText: "(tu) Va!"},
                thirdPersonSingular: {value: "", fullText: ""},
                firstPersonPlural: { value: 'Allons!', fullText: '(nous) Allons!' },
                secondPersonPlural: { value: 'Allez!', fullText: '(vous) Allez!' },
                thirdPersonPlural: {value: "", fullText: ""}
            },
            conditional: {
                name: "Conditionnel",
                firstPersonSingular: {value: "irais", fullText: "j'irais"},
                secondPersonSingular: {value: "irais", fullText: "tu irais"},
                thirdPersonSingular: { value: 'irait', fullText: 'il/elle/on irait' },
                firstPersonPlural: { value: 'irions', fullText: 'nous irions' },
                secondPersonPlural: { value: 'iriez', fullText: 'vous iriez' },
                thirdPersonPlural: { value: 'iraient', fullText: 'ils/elles iraient' }
            },
            pastConditional: {
                name: "Conditionnel Passé",
                firstPersonSingular: { value: 'serais allé(e)', fullText: 'je serais allé(e)' },
                secondPersonSingular: { value: 'serais allé(e)', fullText: 'tu serais allé(e)' },
                thirdPersonSingular: { value: 'serait allé(e)', fullText: 'il/elle/on serait allé(e)' },
                firstPersonPlural: { value: 'serions allé(e)s', fullText: 'nous serions allé(e)s' },
                secondPersonPlural: { value: 'seriez allé(e)s', fullText: 'vous seriez allé(e)s' },
                thirdPersonPlural: { value: 'seraient allé(e)s', fullText: 'ils/elles seraient allé(e)s' }
            },
            past: {
                name: "Passé Composé",
                firstPersonSingular: { value: 'suis allé(e)', fullText: 'je suis allé(e)' },
                secondPersonSingular: { value: 'es allé(e)', fullText: 'tu es allé(e)' },
                thirdPersonSingular: { value: 'est allé(e)', fullText: 'il/elle/on est allé(e)' },
                firstPersonPlural: { value: 'sommes allé(e)s', fullText: 'nous sommes allé(e)s' },
                secondPersonPlural: { value: 'êtes allé(e)s', fullText: 'vous êtes allé(e)s' },
                thirdPersonPlural: { value: 'sont allé(e)s', fullText: 'ils/elles sont allé(e)s' }
            },
            imperfect: {
                name: "Imparfait",
                firstPersonSingular: {value: "allais", fullText: "j'allais"},
                secondPersonSingular: { value: 'allais', fullText: 'tu allais' },
                thirdPersonSingular: { value: 'allait', fullText: 'il/elle/on allait' },
                firstPersonPlural: { value: 'allions', fullText: 'nous allions' },
                secondPersonPlural: { value: 'alliez', fullText: 'vous alliez' },
                thirdPersonPlural: { value: 'allaient', fullText: 'ils/elles allaient' }
            },
            pluperfect: {
                name: "Plus-que-Parfait",
                firstPersonSingular: { value: 'étais allé(e)', fullText: 'j\'étais allé(e)' },
                secondPersonSingular: { value: 'étais allé(e)', fullText: 'tu étais allé(e)' },
                thirdPersonSingular: { value: 'était allé(e)', fullText: 'il/elle/on était allé(e)' },
                firstPersonPlural: { value: 'étions allé(e)s', fullText: 'nous étions allé(e)s' },
                secondPersonPlural: { value: 'étiez allé(e)s', fullText: 'vous étiez allé(e)s' },
                thirdPersonPlural: { value: 'étaient allé(e)s', fullText: 'ils/elles étaient allé(e)s' }
            },
            subjunctive: {
                name: "Subjonctif",
                firstPersonSingular: {value: "aille", fullText: "j'aille"},
                secondPersonSingular: { value: 'ailles', fullText: 'tu ailles' },
                thirdPersonSingular: { value: 'aille', fullText: 'il/elle/on aille' },
                firstPersonPlural: { value: 'aillions', fullText: 'nous aillions' },
                secondPersonPlural: { value: 'ailliez', fullText: 'vous ailliez' },
                thirdPersonPlural: { value: 'aillent', fullText: 'ils/elles aillent' }
            },
            pastSubjunctive: {
                name: "Subjonctif Passé",
                firstPersonSingular: { value: 'sois allé(e)', fullText: 'je sois allé(e)' },
                secondPersonSingular: { value: 'sois allé(e)', fullText: 'tu sois allé(e)' },
                thirdPersonSingular: { value: 'soit allé(e)', fullText: 'il/elle/on soit allé(e)' },
                firstPersonPlural: { value: 'soyons allé(e)s', fullText: 'nous soyons allé(e)s' },
                secondPersonPlural: { value: 'soyez allé(e)s', fullText: 'vous soyez allé(e)s' },
                thirdPersonPlural: { value: 'soient allé(e)s', fullText: 'ils/elles soient allé(e)s' }
            },
            imperfectSubjunctive: {
                name: "Imparfait de Subjonctif",
                firstPersonSingular: { value: 'allasse', fullText: 'j\'allasse' },
                secondPersonSingular: { value: 'allasses', fullText: 'tu allasses' },
                thirdPersonSingular: { value: 'allât', fullText: 'il/elle/on allât' },
                firstPersonPlural: { value: 'allassions', fullText: 'nous allassions' },
                secondPersonPlural: { value: 'allassiez', fullText: 'vous allassiez' },
                thirdPersonPlural: { value: 'allassent', fullText: 'ils/elles allassent' }
            },
            simplePast: {
                name: "Passé Simple",
                firstPersonSingular: {value: "allai", fullText: "j'allai"},
                secondPersonSingular: {value: "allas", fullText: "tu allas"},
                thirdPersonSingular: { value: 'alla', fullText: 'il/elle/on alla' },
                firstPersonPlural: { value: 'allâmes', fullText: 'nous allâmes' },
                secondPersonPlural: { value: 'allâtes', fullText: 'vous allâtes' },
                thirdPersonPlural: { value: 'allèrent', fullText: 'ils/elles allèrent' }
            },
            pastAnterior: {
                name: "Passé Antèrieur",
                firstPersonSingular: { value: 'fus allé(e)', fullText: 'je fus allé(e)' },
                secondPersonSingular: { value: 'fus allé(e)', fullText: 'tu fus allé(e)' },
                thirdPersonSingular: { value: 'fut allé(e)', fullText: 'il/elle/on fut allé(e)' },
                firstPersonPlural: { value: 'fûmes allé(e)s', fullText: 'nous fûmes allé(e)s' },
                secondPersonPlural: { value: 'fûtes allé(e)s', fullText: 'vous fûtes allé(e)s' },
                thirdPersonPlural: { value: 'furent allé(e)s', fullText: 'ils/elles furent allé(e)s' }
            },
            pluperfectSubjunctive: {
                name: "Plus-que-Parfait de Subjonctif",
                firstPersonSingular: { value: 'fusse allé(e)', fullText: 'je fusse allé(e)' },
                secondPersonSingular: { value: 'fusses allé(e)', fullText: 'tu fusses allé(e)' },
                thirdPersonSingular: { value: 'fût allé(e)', fullText: 'il/elle/on fût allé(e)' },
                firstPersonPlural: { value: 'fussions allé(e)s', fullText: 'nous fussions allé(e)s' },
                secondPersonPlural: { value: 'fussiez allé(e)s', fullText: 'vous fussiez allé(e)s' },
                thirdPersonPlural: { value: 'fussent allé(e)s', fullText: 'ils/elles fussent allé(e)s' }
            }
        }
    };
}
