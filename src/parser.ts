import { IConjugatedVerb, IConjugationEndings, ISummaryVerbGroups, IVerb } from "./interfaces";
import * as qstr from './qtools/qstr';

// TODO: add rank at end and buttons: Most Recent, Most Important, Base Conjugations

export const verbDefinitions = `
// convertir

ser: 1soy, 2eres, 3es, 4somos, 5sois, 6son; 1era, 2eras, 3era, 4éramos, 5erais, 6eran; 1fui, 2fuiste, 3fue, 4fuimos, 5fuisteis, 6fueron // -; -; - // -; -
estar: 1estoy, 2estás, 3está, 6están; -; 1estuve, 2estuviste, 3estuvo, 4estuvimos; 5estuvisteis, 6estuvieron // -; -; 1esté, 2estés, 3esté, 6estén // -; -
ir: 1voy, 2vas, 3va, 4vamos, 5vais, 6va; 1iba, 2ibas, 3iba, 4íbamos, 5ibais, 6iban; 1fui, 2fuiste, 3fue, 4fuimos, 5fuisteis, 6fueron // -; -; vay- // yendo; -
haber: 1he, 2has, 3ha, 4hemos, 6han; -; hub-, 1hube, 3hubo // hubr-; hubr-; hay // -; -

poder: pued-,4-,5-;-;pud-,1pude,3pudo//podr-;podr-;peud-,4-,5- // pudiendo; -
querer: quier-, 4-, 5-; -; quis-, 1quise, 2quiso // querr-; querr-; quier-, 4-, 5- // -; - 
deber
desear
hacer: 1hago ; hac- ; hic-,1hice,3hizo // har- ; har- ; hag- // - ; hecho
tener: tien-,1tengo,4-,5- ; - ; tuv- // tendr- ; tendr- ; teng- // - ; -
dar: 1doy, 5dais; -; 1di, 2diste, 3dio, 4dimos, 5disteis, 6dieron // -; -; 1dé, 2des, 3dé, 4demos, 5deis, 6den // -; -
saber: 1sé; -; sup-, 1supe, 3supo // sabr-; sabr-; sep- // -; -
ver: 1veo, 5veis; ve-; 1vi, 3vio // -; -; ve- // -; visto

venir: vien-, 1vengo, 4-, 5-; -; vin-, 1vine, 3vino // vendr-; vendr-; veng- // viniendo; -
vender

llegar: - ; - ; 1llegué // - ; - ; llegu- // - ; -
llamar

hablar
instalar
ejecutar
conectar
separar
crear
gritar
notar
evitar
levantar
segmentar
revisar

comer
correr

vivir
unir
permitir
recibir

arrancar: -; -; 1arranqué // -; -; arranqu- // -; -
recordar: recuerd-,4-,5- ; - ; - // - ; - ; recuerd-,4-,5- // - ; - 
utilizar: -; -; 1utilicé // -; -; utilic- // -; -

ofrecer: 1ofrezco;-;-//-;-;ofrezc-//-;-
aparecer: 1aparezco; -; - // -; -; aparezc- // -; -
volver: vuelv-,4-,5- ; - ; - // - ; - ; vuelv-,4-,5- // - ; vuelto

incluir: incluy-,4-,5- ; - ; 3incluy-, 6incluy- // - ; - ; incluy- // incluyendo ; -	
`;

const getRegularVerbs = (verbDefinitions: string): IVerb[] => {
	const lines = qstr.convertStringBlockToLines(verbDefinitions);
	const ra: IVerb[] = [];
	for (const line of lines) {
		if (!qstr.contains(line, ' ') && !line.startsWith('---') && !qstr.isEmpty(line)) {
			ra.push({
				verbName: line,
				kind: 'regular',
				infos: []
			});
		} else {
			if (!qstr.isEmpty(line) && !line.startsWith('//')) {
				const parts = qstr.breakIntoParts(line, ':');
				const theVerb = parts[0];
				const rest = parts[1]; // incluy-,4-,5- ; - ; 3incluy-, 6incluy- // - ; - ; incluy- // incluyendo ; -
				const thirds = qstr.breakIntoParts(rest, '//');
				const infos = [];
				infos.push(thirds[2]);
				for (const info of qstr.breakIntoParts(thirds[0], ';')) {
					infos.push(info);
				}
				for (const info of qstr.breakIntoParts(thirds[1], ';')) {
					infos.push(info);
				}
				ra.push({
					verbName: theVerb,
					kind: 'irregular',
					infos
				});
			}
		}
	}
	return ra;
}

export const verbs: IVerb[] = getRegularVerbs(verbDefinitions);
console.log(verbs);

const conjugationEndings: IConjugationEndings = {
	ar: {
		part: ['ando', 'ado'],
		pres: ['o', 'as', 'a', 'amos', 'áis', 'an'],
		impe: ['aba', 'abas', 'aba', 'ábabos', 'abais', 'aban'],
		pret: ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'],
		futu: ['é', 'ás', 'á', 'emos', 'éis', 'án'],
		cond: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
		subj: ['e', 'es', 'e', 'emos', 'éis', 'en'],
	},
	er: {
		part: ['iendo', 'ido'],
		pres: ['o', 'es', 'e', 'emos', 'éis', 'en'],
		impe: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
		pret: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'],
		futu: ['é', 'ás', 'á', 'emos', 'éis', 'án'],
		cond: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
		subj: ['a', 'as', 'a', 'amos', 'áis', 'an'],
	},
	ir: {
		part: ['iendo', 'ido'],
		pres: ['o', 'es', 'e', 'imos', 'ís', 'en'],
		impe: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
		pret: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'],
		futu: ['é', 'ás', 'á', 'emos', 'éis', 'án'],
		cond: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
		subj: ['a', 'as', 'a', 'amos', 'áis', 'an'],
	},
};

export const conjugateVerb = (verb: IVerb) => {
	const ending = verb.verbName.slice(-2);
	const base = verb.verbName.slice(0, -2);
	return {
		verb,
		ending,
		base,
		ce: conjugationEndings[ending as keyof IConjugationEndings]
	};
};

export const conjugatedVerbs: IConjugatedVerb[] = [];
for (const verb of verbs) {
	const conjugatedVerb = conjugateVerb(verb);
	conjugatedVerbs.push(conjugatedVerb);
}

const getVerbList = (kind: string, ending: string) => {
	return conjugatedVerbs.filter(m => m.verb.kind === kind && m.verb.verbName.endsWith(ending)).map(m => m.verb.verbName).sort();
}

export const getSummaryVerbGroups = (conjugatedVerbs: IConjugatedVerb[]): ISummaryVerbGroups => {
	return {
		"arRegular": getVerbList('regular', 'ar'),
		"arIrregular": getVerbList('irregular', 'ar'),
		"erRegular": getVerbList('regular', 'er'),
		"erIrregular": getVerbList('irregular', 'er'),
		"irRegular": getVerbList('regular', 'ir'),
		"irIrregular": getVerbList('irregular', 'ir')
	}
}