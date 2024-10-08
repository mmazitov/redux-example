import './History.css';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const History = () => {
	const history = useSelector((state: RootState) => state.history.history);

	return (
		<div>
			<div className="history-container">
				<h2>History</h2>
				<div className="history-list">
					{history.map((item, index) => (
						<div key={index} className="history-item">
							{item}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default History;
