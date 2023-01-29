export const convertStringBlockToLines = (stringBlock: string) => {
	const lines = stringBlock.split('\n').map(m => m.trim());
	return lines;
}
