import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageImport = () => {
	const { handleSpanishImport, spanishImportText, setSpanishImportText } =
		useContext(AppContext);

	const formatExampleText = `
I'm sorry, I do not understand you. I still can't understand you.
Lo siento, no te entiendo. Todavía no puedo entenderte.
4.9
cantUnderstand

What time is it?
¿Qué hora será?
4.2

My Spanish isn't good enough to understand you.
Mi español no es suficiente para entenderte.
4.95
cantUnderstand

I'll do it.
Lo haré.
`;
	return (
		<div className="page pageImport">
			<h2>Spanish Flashcards</h2>
			<form>
				<div className="row">
					<textarea
						value={spanishImportText}
						onChange={(e) => setSpanishImportText(e.target.value)}
						spellCheck={false}
					></textarea>
				</div>
				<div className="buttonArea">
					<button type="button" onClick={handleSpanishImport}>
						Import
					</button>
				</div>
			</form>
			<h3>Formatting example</h3>
			<pre>{formatExampleText.trim()}</pre>
		</div>
	);
};
