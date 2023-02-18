import { IConjugationEndings } from "../interfaces";
import { conjugatedVerbs } from "../parser";

export const PageBaseVerbs = () => {




	return (
		<div className="page pageBaseVerbs">
			{conjugatedVerbs.map((cv, i) => {
				return (
					<table key={i}>
						<tbody>

							<tr className="part">
								<td className="verb"><a target="_blank" href={`https://www.123teachme.com/spanish_verb_conjugation/${cv.verb.verbName}`}>{cv.verb.verbName}</a></td>
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
											{cv.verb.verbName}
											<span>{cv.ce.futu[i]}</span>
										</td>
									);
								})}
							</tr>

							<tr className="cond">
								{[...Array(6)].map((x, i) => {
									return (
										<td key={i}>
											{cv.verb.verbName}
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
