import { ISummaryVerbGroups } from "../interfaces";

interface IProps {
	summaryVerbGroup: string[],
	kind: string
}

export const SummaryVerbGroup = ({ summaryVerbGroup, kind }: IProps) => {
	return (
		<li className={kind}>
			{summaryVerbGroup.map((verbName, i) => {
				const sep =
					i === summaryVerbGroup.length - 1 ? '' : ', ';
				return (
					<>
						<span>{verbName}</span>
						{sep}
					</>
				);
			})}
		</li>
	);
};
