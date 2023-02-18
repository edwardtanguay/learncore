import { IConjugatedVerb, IConjugationEndings } from "./interfaces";
import * as qstr from './qtools/qstr';

export const verbDefinitions = `
permitir
hablar
evitar
llamar
notar

comer

vivir
---------------------------
recordar: o>ue,4-,5- ; - ; - // - ; - ; o>eu,4-,5- // - ; - 
llegar: - ; - ; 1llegué // - ; - ; llegu- // - ; -

hacer: 1hago ; hac- ; hic-,1hice,3hizo // har- ; har- ; hag- // - ; hecho
volver: vuelv-,4-,5- ; - ; - // - ; - ; vuelv-,4-,5- // - ; vuelto
tener: tien-,1tengo,4-,5- ; - ; tuv- // tendr- ; tendr- ; teng- // - ; -

incluir: incluy-,4-,5- ; - ; 3incluy-, 6incluy- // - ; - ; incluy- // incluyendo ; -	
`;

const getRegularVerbs = (verbDefinitions: string) => {
	const lines = qstr.convertStringBlockToLines(verbDefinitions);
	const ra: string[] = [];
	for (const line of lines) {
		if (!qstr.contains(line, ' ') && !line.startsWith('---') && !qstr.isEmpty(line)) {
			ra.push(line);
		}
	}
	return ra;
}

export const regularVerbs: string[] = getRegularVerbs(verbDefinitions); 
console.log(regularVerbs);

const conjugationEndings: IConjugationEndings = {
	ar: {
		part: ['ando', 'ado'],
		pres: ['o', 'as', 'a', 'amos', 'áis', 'an'],
		impe: ['aba', 'abas', 'aba', 'ábabos', 'abais', 'aban'],
		pret: ['é', 'aste', 'ó', 'amos', 'asteis', 'arán'],
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

export const conjugateVerb  = (verb: string) => {
	const ending = verb.slice(-2);
	const base = verb.slice(0, -2);
	return {
		verb,
		ending,
		base,
		ce: conjugationEndings[ending as keyof IConjugationEndings]
	};
};

export const conjugatedVerbs:IConjugatedVerb[] = [];
for (const verb of regularVerbs) {
	const conjugatedVerb = conjugateVerb(verb);
	conjugatedVerbs.push(conjugatedVerb);
}