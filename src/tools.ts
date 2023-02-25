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
	let lines = tools.convertStringBlockToLines(spanishImportText);
	lines = tools.trimLinesOfEndBlanks(lines);
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

// returns a lines array that has front and end blank strings, as one without these blanks
export const trimLinesOfEndBlanks = (lines: string[]) => {
    lines = tools.trimBeginningLinesOfBlanks(lines);
    lines = lines.reverse();
    lines = tools.trimBeginningLinesOfBlanks(lines);
    lines = lines.reverse();
    return lines;
}

// if first line of lines array is blank, it will remove it
// but don't remove any blank lines from middle or end
export const trimBeginningLinesOfBlanks = (lines: string[]) => {
    const newLines: string[] = [];
    let trimmingBlanks = true;
    lines.forEach(function (line) {
        const newLine = line;
        if (trimmingBlanks && line === '') {
            // skip it since it is a preceding blank item
        } else {
            newLines.push(newLine);
            trimmingBlanks = false;
        }
    });
    return newLines;
}
