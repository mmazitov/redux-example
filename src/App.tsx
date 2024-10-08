import './App.css';

import History from './components/history/History';
import Score from './components/score/Score';

function App() {
	return (
		<div className="app-container">
			<Score />
			<History />
		</div>
	);
}

export default App;
