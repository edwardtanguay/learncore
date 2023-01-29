export const PageImport = () => {

	const formatExampleText = `
I'm sorry, I do not understand you. I still can't understand you.
Lo siento, no te entiendo. Todavía no puedo entenderte.
cantUnderstand

What time is it?
¿Qué hora será?

My Spanish isn't good enough to understand.
Mi español no es suficiente para entenderte.
cantUnderstand

I will do it.
Lo haré.
`;
	return (
		<div className="page pageImport">
			<form>
				<div className="row">
					<label>Spanish Flashcards</label>
					<textarea></textarea>
				</div>
				<div className="buttonArea">
					<button type="button">Import</button>
				</div>
			</form>
			<h2>Format example</h2>
			<pre>{formatExampleText.trim()}</pre>
		</div>
	);
};
