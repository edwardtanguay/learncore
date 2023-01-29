import * as tools from './tools';

export const convertStringBlockToLines = (stringBlock: string) => {
	const lines = stringBlock.split('\n').map(m => m.trim());
	return lines;
}
export const buildSpanishFlashcardJsonText = (spanishImportText: string) => {
	const lines = tools.convertStringBlockToLines(spanishImportText);
	const lineBlocks = tools.getLineBlocksFromLines(lines);
	// const json = tools.getSpanishJsonFromLineBlocks(lineBlocks);
	console.log(lineBlocks)
}

export const getLineBlocksFromLines = (lines: string[]) => {
	const lineBlocks = [];
	let lineBlock = [];
	for (const line of lines) {
		if (line.trim() !== '') {
			lineBlock.push(line);
		} else {
			lineBlocks.push(lineBlock);
			lineBlock = [];
		}
	}
	if (lineBlock.length > 0) {
		lineBlocks.push(lineBlock);
	}
	// pad so all have same length entries
	for (const lineBlock of lineBlocks) {
		const numberOfLinesToAdd = 4 - lineBlock.length;
		console.log(lineBlock.length, numberOfLinesToAdd);
		for (let i = 0; i < numberOfLinesToAdd; i++) {
			lineBlock.push('');
		}
	}
	return lineBlocks;
}

// export const getSpanishJsonFromLineBlocks = (lineBlocks: string[][]) => {
// 	const objs = [];
// 	for (const lineBlock of lineBlocks) {
// 		const obj = {
// 			category: 'spanish',
// 			subcategory ''
// 		}
// 	}
// }

