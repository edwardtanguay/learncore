export const PageBaseVerbs = () => {
	const conjugationEndings = {
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

	const conjugateVerb = (verb) => {
		const ending = verb.slice(-2);
		const base = verb.slice(0, -2);
		return {
			verb,
			ending,
			base,
			ce: conjugationEndings[ending]
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
					<table key={i}>
						<tbody>
							{/* base and particles */}
							<tr className="pret">
								<td className="verb">{cv.verb}</td>
								<td>
									{cv.base}
									<span>{cv.ce.part[0]}</span>
								</td>
								<td>
									{cv.base}
									<span>{cv.ce.part[1]}</span>
								</td>
							</tr>
							<tr className="pres">
								<td>
									{cv.base}
									<span>{cv.ce.pres[0]}</span>
								</td>
								<td>
									{cv.base}
									<span>{cv.ce.pres[1]}</span>
								</td>
								<td>
									{cv.base}
									<span>{cv.ce.pres[2]}</span>
								</td>
								<td>
									{cv.base}
									<span>{cv.ce.pres[3]}</span>
								</td>
								<td>
									{cv.base}
									<span>{cv.ce.pres[4]}</span>
								</td>
								<td>
									{cv.base}
									<span>{cv.ce.pres[5]}</span>
								</td>
							</tr>
						</tbody>
					</table>
				);
			})}
		</div>
	);
};
