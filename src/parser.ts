import { IConjugatedVerb, IConjugationEndings, ISummaryVerbGroups, IVerb } from "./interfaces";
import * as qstr from './qtools/qstr';

export const verbDefinitions = `
ofrecer: 1ofrezco;-;-//-;-;ofrezc-//-;-
conectar
unir
separar
poder: o>ue,4-,5-;-;pud-,1pude,3pudo//podr-;podr-;o>ue,4-,5- // pudiendo; -
crear
recordar: o>ue,4-,5- ; - ; - // - ; - ; o>ue,4-,5- // - ; - 
gritar
permitir
hablar
evitar
llamar
notar

comer

vivir
llegar: - ; - ; 1llegué // - ; - ; llegu- // - ; -

hacer: 1hago ; hac- ; hic-,1hice,3hizo // har- ; har- ; hag- // - ; hecho
volver: vuelv-,4-,5- ; - ; - // - ; - ; vuelv-,4-,5- // - ; vuelto
tener: tien-,1tengo,4-,5- ; - ; tuv- // tendr- ; tendr- ; teng- // - ; -

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
			if (!qstr.isEmpty(line)) {
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