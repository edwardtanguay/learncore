import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageLearn = () => {
	const { flashcards, handleToggleFlashcard } = useContext(AppContext);

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
