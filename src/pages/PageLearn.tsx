import { useContext } from 'react';
import { AppContext } from '../AppContext';
import db from '../data/db.json';
import { IFlashcard } from '../interfaces';

const flashcards: IFlashcard[] = db.flashcards;

export const PageLearn = () => {
	const { handleToggleFlashcard } = useContext(AppContext);

	return (
		<div className="page pageLearn">
			<div className="flashcards">
				{flashcards.map((flashcard) => {
					return (
						<div className="flashcard" key={flashcard.id}>
							<div className="front" onClick={() => handleToggleFlashcard(flashcard)}>{flashcard.front}</div>
							{flashcard.isOpen && (
								<div className="back">{flashcard.back}</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};
