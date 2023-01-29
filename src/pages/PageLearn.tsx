import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageLearn = () => {
	const { flashcards } = useContext(AppContext);

	return (
		<>
			<p>There are {flashcards.length} flashcards.</p>
			<div className="flashcards">
				{flashcards.map(flashcard => {
					return (
						<div className="flashcard" key={flashcard.id}>
							<div className="front">{flashcard.front}</div>
							<div className="back">{flashcard.back}</div>
						</div>
					)
				})}
			</div>
		</>
	);
};