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