import fs from 'fs';

const name = process.argv[2];

if (name === undefined) {
	console.log('SCRIPT: cp');
	console.log('NAME: create page');
	console.log('-------------------------');
	console.log('EXAMPLE: npm run cp Info');
	console.log('RESULT: creates page /scr/components/PageInfo.tsx');
	process.exit();
} else {
	const content = `
export const Page${name} = () => {
	return (
		<>
			<p>This is the ${name} page.</p>
		</>
	);
};
	`;
	(async () => {
		fs.writeFile(`./src/components/Page${name}.tsx`, content.trim(), () => {});
	})();
}