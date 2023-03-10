import { useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import { IFlashcard, IRawFlashcard } from './interfaces';
import { cloneDeep } from 'lodash';
import * as tools from './tools';

const backendUrl = 'http://localhost:5556';

interface IAppContext {
	appTitle: string;
	flashcards: IFlashcard[];
	handleToggleFlashcard: (flashcard: IFlashcard) => void;
	handleSpanishImport: () => void;
	spanishImportText: string;
	setSpanishImportText: (text: string) => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const appTitle = 'Info Site';
	const [flashcards, setFlashcards] = useState<IFlashcard[]>([]);
	const [spanishImportText, setSpanishImportText] = useState('');

	const loadFlashcards = async () => {
		const rawFlashcards = (await axios.get(`${backendUrl}/flashcards`))
			.data;
		let _flashcards: IFlashcard[] = [];
		rawFlashcards.forEach((rawFlashcard: IRawFlashcard) => {
			const _flashcard: IFlashcard = {
				...rawFlashcard,
				isOpen: false,
			};
			_flashcards.push(_flashcard);
		});
		_flashcards = _flashcards.sort((a, b) => b.rank - a.rank);
		setFlashcards(_flashcards);
	};

	useEffect(() => {
		loadFlashcards();
	}, []);

	const handleToggleFlashcard = (flashcard: IFlashcard) => {
		flashcard.isOpen = !flashcard.isOpen;
		setFlashcards(cloneDeep(flashcards));
	};
	const handleSpanishImport = async () => {
		const spanishFlashcards =
			tools.buildSpanishFlashcardObjs(spanishImportText);
		try {
			for (const spanishFlashcard of spanishFlashcards) {
				await axios.post(`${backendUrl}/flashcards`, spanishFlashcard, {
					withCredentials: true,
				});
			}
			setSpanishImportText('');
			loadFlashcards();
		} catch (e: any) {
			console.log(`ERROR: ${e.message}`);
		}
	};
	return (
		<AppContext.Provider
			value={{
				appTitle,
				flashcards,
				handleToggleFlashcard,
				handleSpanishImport,
				spanishImportText,
				setSpanishImportText,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
