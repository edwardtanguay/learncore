import * as tools from './tools';

export const convertStringBlockToLines = (stringBlock: string) => {
	if (stringBlock.trim() === '') {
		return [];
	} else {
		const lines = stringBlock.split('\n').map(m => m.trim());
		return lines;
	}
}
export const buildSpanishFlashcardObjs = (spanishImportText: string) => {
	const lines = tools.convertStringBlockToLines(spanishImportText);
	const lineBlocks = tools.getLineBlocksFromLines(lines);
	const objs = tools.getSpanishObjectsFromLineBlocks(lineBlocks);
	return objs;
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
		for (let i = 0; i < numberOfLinesToAdd; i++) {
			lineBlock.push('');
		}
	}
	return lineBlocks;
}

export const getSpanishObjectsFromLineBlocks = (lineBlocks: string[][]) => {
	const objs = [];
	for (const lineBlock of lineBlocks) {
		const obj = {
			category: 'spanish',
			subcategory: lineBlock[3],
			front: lineBlock[0],
			back: lineBlock[1],
			rank: lineBlock[2] === '' ? 2.5 : Number(lineBlock[2]),
			whenCreated: tools.getDateTime()
		}
		objs.push(obj);
	}
	return objs;
}

export const getDateTime = () => {
	const d = new Date();
	let dateTime = d.toISOString(); // 2023-01-29T19:25:02.232Z
	dateTime = dateTime.substring(0, 19); // 2023-01-29T19:25:02
	dateTime = dateTime.replace('T', ' '); // 2023-01-29 19:25:02
	return dateTime;
}

