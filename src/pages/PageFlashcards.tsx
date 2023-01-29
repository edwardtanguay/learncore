import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageFlashcards = () => {
	const { flashcards } = useContext(AppContext);

	return (
		<div className="page pageFlashcards">
			<div className="flashcards1">
				{flashcards.map(flashcard => {
					return (
						<div className="flashcard" key={flashcard.id}>
							<div className="front">{flashcard.front}</div>
						</div>
					)
				})}
			</div>
			<div>---</div>
			<div className="flashcards2">
				{flashcards.map(flashcard => {
					return (
						<div className="flashcard" key={flashcard.id}>
							<div className="back">{flashcard.back}</div>
						</div>
					)
				})}
			</div>
		</div>
	);
};