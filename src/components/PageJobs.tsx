import { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:5556';

interface IJob {
	id: number;
	title: string;
	company: string;
	description: string;
	url: string;
	skills: string;
	publicationDate: string;
	status: string;
}

export const PageJobs = () => {
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		(async () => {
			setJobs((await axios.get(`${apiUrl}/jobs`)).data);
		})();
	}, []);

	return (
		<div className="pageJobs">
			<div className="jobs">
				<h2>There are {jobs.length} jobs:</h2>
				{jobs.map((job: IJob) => {
					return (
						<div className="job">
							<div className="title"><a href={job.url} target="_blank">{job.title}</a></div>
							<div className="company">{job.company}</div>
							<div className="description">{job.description}</div>
							<div className="skills">{job.skills}</div>
							<div className="statusLine">{job.publicationDate}: {job.status}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
