export const PageBaseVerbs = () => {

	const verbs = `
hablar
evitar
llamar
notar

comer

vivir
permitir
---------------------------
recordar: o>ue,4-,5- ; - ; - // - ; - ; o>eu,4-,5- // - ; - 
llegar: - ; - ; 1llegué // - ; - ; llegu- // - ; -

hacer: 1hago ; hac- ; hic-,1hice,3hizo // har- ; har- ; hag- // - ; hecho
volver: vuelv-,4-,5- ; - ; - // - ; - ; vuelv-,4-,5- // - ; vuelto
tener: tien-,1tengo,4-,5- ; - ; tuv- // tendr- ; tendr- ; teng- // - ; -

incluir: incluy-,4-,5- ; - ; 3incluy-, 6incluy- // - ; - ; incluy- // incluyendo ; -	
`;

	regularVerbs = [];

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
	for (const verb of regularVerbs) {
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

							<tr className="part">
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
								{[...Array(6)].map((x, i) => {
									return (
										<td key={i}>
											{cv.base}
											<span>{cv.ce.pres[i]}</span>
										</td>
									);
								})}
							</tr>

							<tr className="impe">
								{[...Array(6)].map((x, i) => {
									return (
										<td key={i}>
											{cv.base}
											<span>{cv.ce.impe[i]}</span>
										</td>
									);
								})}
							</tr>

							<tr className="pret">
								{[...Array(6)].map((x, i) => {
									return (
										<td key={i}>
											{cv.base}
											<span>{cv.ce.pret[i]}</span>
										</td>
									);
								})}
							</tr>

							<tr className="futu">
								{[...Array(6)].map((x, i) => {
									return (
										<td key={i}>
											{cv.verb}
											<span>{cv.ce.futu[i]}</span>
										</td>
									);
								})}
							</tr>

							<tr className="cond">
								{[...Array(6)].map((x, i) => {
									return (
										<td key={i}>
											{cv.verb}
											<span>{cv.ce.cond[i]}</span>
										</td>
									);
								})}
							</tr>

							<tr className="subj">
								{[...Array(6)].map((x, i) => {
									return (
										<td key={i}>
											{cv.base}
											<span>{cv.ce.subj[i]}</span>
										</td>
									);
								})}
							</tr>
						</tbody>
					</table>
				);
			})}
		</div>
	);
};
