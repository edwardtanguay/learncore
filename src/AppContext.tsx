import { useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import {IFlashcard} from './interfaces';

const backendUrl = 'http://localhost:5556';

interface IAppContext {
	appTitle: string;
	flashcards: IFlashcard[]
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const appTitle = 'Info Site';
	const [flashcards, setFlashcards] = useState<IFlashcard[]>([]);

	useEffect(() => {
		(async () => {
			setFlashcards((await axios.get(`${backendUrl}/flashcards`)).data);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				appTitle,
				flashcards
			}}
		>
			{children}
		</AppContext.Provider>
	);
};