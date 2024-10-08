import './Score.css';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { decrement, increment } from './scoreSlice';

import { addHistory, resetHistory } from '../history/historySlice';

const Score = () => {
	const score = useSelector((state: RootState) => state.score.score);

	const dispatch = useDispatch<AppDispatch>();

	const handleSubmit = () => {
		dispatch(addHistory(score));
	};

	const handleReset = () => {
		dispatch(resetHistory());
	};
	return (
		<div className="score-container">
			<h2>Score</h2>
			<div className="score-display">
				<button onClick={() => dispatch(decrement())}>-</button>
				<span>{score}</span>
				<button onClick={() => dispatch(increment())}>+</button>
			</div>
			<button className="submit-btn" onClick={handleSubmit}>
				Submit
			</button>
			<button className="reset-btn" onClick={handleReset}>
				Reset
			</button>
		</div>
	);
};

export default Score;
