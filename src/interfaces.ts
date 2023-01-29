export interface IRawFlashcard {
	id: number,
	category: string,
	subcategory: string,
	front: string,
	back: string,
	whenCreated: string
}

export interface IFlashcard extends IRawFlashcard {
	isOpen: boolean
}