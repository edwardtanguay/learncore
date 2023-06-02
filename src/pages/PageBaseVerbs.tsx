import { SummaryVerbGroup } from '../component/SummaryVerbGroup';
import { getSummaryVerbGroups, conjugatedVerbs } from '../parser';

const summaryVerbGroups = getSummaryVerbGroups(conjugatedVerbs);

// also link: https://es.bab.la/diccionario/espanol-ingles/permitimos

export const PageBaseVerbs = () => {
	const getTatoebaLink = (conjugatedBase: string, ending: string) => {
		return `https://tatoeba.org/de/sentences/search?from=spa&query=%3D${conjugatedBase}${ending}&to=eng`;
	};
	return (
		<div className="page pageBaseVerbs">
			<div className="summary">
				<ul className="summaryVerbGroups">
					<SummaryVerbGroup
						summaryVerbGroup={summaryVerbGroups.arRegular}
						kind="regular"
					/>
					<SummaryVerbGroup
						summaryVerbGroup={summaryVerbGroups.arIrregular}
						kind="irregular"
					/>
					<SummaryVerbGroup
						summaryVerbGroup={summaryVerbGroups.erRegular}
						kind="regular"
					/>
					<SummaryVerbGroup
						summaryVerbGroup={summaryVerbGroups.erIrregular}
						kind="irregular"
					/>
					<SummaryVerbGroup
						summaryVerbGroup={summaryVerbGroups.irRegular}
						kind="regular"
					/>
					<SummaryVerbGroup
						summaryVerbGroup={summaryVerbGroups.irIrregular}
						kind="irregular"
					/>
				</ul>
			</div>
			{conjugatedVerbs.map((cv, i) => {
				return (
					<>
						<hr />
						<ul>
							<li>
								Es importante que hagas ejercicio todos los
								días.
							</li>
							<li>
								Sería importante que hicieras ejercicio todos
								los días.
							</li>
						</ul>
						<hr />
						{cv.verb.kind === 'irregular' ? (
							<div className="irregularVerbArea">
								<div className="verbName">
									<a
										target="_blank"
										href={`https://www.123teachme.com/spanish_verb_conjugation/${cv.verb.verbName}`}
									>
										{cv.verb.verbName}
									</a>
									<span>{cv.verb.infos[0]}</span>
								</div>
								<div className="infos">
									{cv.verb.infos.map((info, i) => {
										return i === 0 ? (
											''
										) : (
											<div key={i}>{info}</div>
										);
									})}
								</div>
							</div>
						) : (
							<table key={i}>
								<tbody>
									<tr className="part">
										<td className="verb">
											<a
												target="_blank"
												href={`https://www.123teachme.com/spanish_verb_conjugation/${cv.verb.verbName}`}
											>
												{cv.verb.verbName}
											</a>
										</td>
										<td>
											<a
												target="_blank"
												href={getTatoebaLink(
													cv.base,
													cv.ce.part[0]
												)}
											>
												{cv.base}
												<span>{cv.ce.part[0]}</span>
											</a>
										</td>
										<td>
											<a
												target="_blank"
												href={getTatoebaLink(
													cv.base,
													cv.ce.part[1]
												)}
											>
												{cv.base}
												<span>{cv.ce.part[1]}</span>
											</a>
										</td>
									</tr>

									<tr className="pres">
										{[...Array(6)].map((x, i) => {
											return (
												<td key={i}>
													<a
														target="_blank"
														href={getTatoebaLink(
															cv.base,
															cv.ce.pres[i]
														)}
													>
														{cv.base}
														<span>
															{cv.ce.pres[i]}
														</span>
													</a>
												</td>
											);
										})}
									</tr>

									<tr className="impe">
										{[...Array(6)].map((x, i) => {
											return (
												<td key={i}>
													<a
														target="_blank"
														href={getTatoebaLink(
															cv.base,
															cv.ce.impe[i]
														)}
													>
														{cv.base}
														<span>
															{cv.ce.impe[i]}
														</span>
													</a>
												</td>
											);
										})}
									</tr>

									<tr className="pret">
										{[...Array(6)].map((x, i) => {
											return (
												<td key={i}>
													<a
														target="_blank"
														href={getTatoebaLink(
															cv.base,
															cv.ce.pret[i]
														)}
													>
														{cv.base}
														<span>
															{cv.ce.pret[i]}
														</span>
													</a>
												</td>
											);
										})}
									</tr>

									<tr className="futu">
										{[...Array(6)].map((x, i) => {
											return (
												<td key={i}>
													<a
														target="_blank"
														href={getTatoebaLink(
															cv.verb.verbName,
															cv.ce.futu[i]
														)}
													>
														{cv.verb.verbName}
														<span>
															{cv.ce.futu[i]}
														</span>
													</a>
												</td>
											);
										})}
									</tr>

									<tr className="cond">
										{[...Array(6)].map((x, i) => {
											return (
												<td key={i}>
													<a
														target="_blank"
														href={getTatoebaLink(
															cv.verb.verbName,
															cv.ce.cond[i]
														)}
													>
														{cv.verb.verbName}
														<span>
															{cv.ce.cond[i]}
														</span>
													</a>
												</td>
											);
										})}
									</tr>

									<tr className="subj">
										{[...Array(6)].map((x, i) => {
											return (
												<td key={i}>
													<a
														target="_blank"
														href={getTatoebaLink(
															cv.base,
															cv.ce.subj[i]
														)}
													>
														{cv.base}
														<span>
															{cv.ce.subj[i]}
														</span>
													</a>
												</td>
											);
										})}
									</tr>
								</tbody>
							</table>
						)}
					</>
				);
			})}
		</div>
	);
};
