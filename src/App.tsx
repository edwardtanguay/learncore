import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageFlashcards } from './pages/PageFlashcards';
import { PageLearn } from './pages/PageLearn';
import { PageImport } from './pages/PageImport';

function App() {
	return (
		<div className="App">
			<h1>Learn Core</h1>
			<nav>
				<NavLink to="/learn">Learn</NavLink>
				<NavLink to="/import">Import</NavLink>
				<NavLink to="/flashcards">Flashcards</NavLink>
			</nav>

			<Routes>
				<Route path="/learn" element={<PageLearn />} />
				<Route path="/import" element={<PageImport />} />
				<Route path="/flashcards" element={<PageFlashcards />} />
				<Route path="/" element={<Navigate to="/learn" replace />} />
			</Routes>
		</div>
	);
}

export default App;
