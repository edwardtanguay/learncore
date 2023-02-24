import { useContext } from 'react';
import { AppContext } from '../AppContext';
import db from '../data/db.json';
import { IFlashcard } from '../interfaces';

let flashcards: IFlashcard[] = db.flashcards;
flashcards = flashcards.sort((a, b) => b.whenCreated.localeCompare(a.whenCreated));

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
