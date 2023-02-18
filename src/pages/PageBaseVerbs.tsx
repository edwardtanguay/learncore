export const PageBaseVerbs = () => {
	const baseVerbs = {
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

	const verbs = ['hablar', 'comer', 'vivir'];

	const conjugateVerb = (verb: string) => {
		const ending = verb.slice(-2);
		const base = verb.slice(0, -2);
		return {
			verb,
			ending,
			base,
		};
	};

	const conjugatedVerbs = [];
	for (const verb of verbs) {
		const conjugatedVerb = conjugateVerb(verb);
		conjugatedVerbs.push(conjugatedVerb);
	}
	console.log(conjugatedVerbs);

	return (
		<div className="page pageBaseVerbs">
			{conjugatedVerbs.map((cv, i) => {
				return (
					<table>
						<tbody>
							<tr>
								<td className="verb">{cv.verb}</td>
								<td>
									{cv.base}
									<span>ando</span>
								</td>
								<td>
									{cv.base}
									<span>ado</span>
								</td>
							</tr>
							<tr>
								<td>{cv.verb}</td>
								<td>
									{cv.base}
									<span>ando</span>
								</td>
								<td>
									{cv.base}
									<span>ado</span>
								</td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table>
				);
			})}
		</div>
	);
};
