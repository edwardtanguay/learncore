import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageDashboard } from './pages/PageDashboard';
import { PageJobs } from './pages/PageJobs';
import { PageSkills } from './pages/PageSkills';
import { PageFlashcards } from './pages/PageFlashcards';
import { PageLearn } from './pages/PageLearn';

function App() {
	return (
		<div className="App">
			<h1>Learn Core</h1>
			<nav>
				<NavLink to="/dashboard">Dashboard</NavLink>
				<NavLink to="/flashcards">Flashcards</NavLink>
				<NavLink to="/learn">Learn</NavLink>
			</nav>

			<Routes>
				<Route path="/dashboard" element={<PageDashboard />} />
				<Route path="/flashcards" element={<PageFlashcards />} />
				<Route path="/learn" element={<PageLearn />} />
				<Route path="/" element={<Navigate to="/dashboard" replace />} />
			</Routes>
		</div>
	);
}

export default App;
