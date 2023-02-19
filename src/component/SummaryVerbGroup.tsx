import { ISummaryVerbGroups } from "../interfaces";

interface IProps {
	summaryVerbGroup: string[]
}

export const SummaryVerbGroup = ({ summaryVerbGroup }: IProps) => {
	return (
		<li>
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
