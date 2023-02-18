export interface IRawFlashcard {
	id: number,
	category: string,
	subcategory: string,
	front: string,
	back: string,
	rank: number,
	whenCreated: string
}

export interface IFlashcard extends IRawFlashcard {
	isOpen: boolean
}

export type IConjugationEnding = {
	part: [string, string],
	pres: [string, string, string, string, string, string],
	impe: [string, string, string, string, string, string],
	pret: [string, string, string, string, string, string],
	futu: [string, string, string, string, string, string],
	cond: [string, string, string, string, string, string],
	subj: [string, string, string, string, string, string],
}

export type IConjugationEndings = { [key in 'ar' | 'er' | 'ir']: IConjugationEnding }

export type IConjugatedVerb = {
	verb: IVerb;
	ending: string
	base: string
	ce: IConjugationEnding
}

export type IVerb = {
	verbName: string,
	infos: string[]
}