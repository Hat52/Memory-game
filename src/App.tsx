import { useState } from 'react';
import './App.css';
import { gameData } from './constants/data';

type TCurrentFlip = {
	[key: number]: boolean;
};

function App() {
	gameData[0].fliped = true;
	gameData[5].matched = true;

	const [currentFlip, setCurrentFlip] = useState<TCurrentFlip>({});

	const handleClick = (index: number) => {
		if (Object.keys(currentFlip).length >= 2) {
			setCurrentFlip({ [index]: true });
		} else {
			setCurrentFlip((prev) => ({ ...prev, [index]: true }));
		}
	};

	return (
		<div className="md:px-60 px-5 py-10">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				{gameData.map((d: any, index: number) => (
					<div
						onClick={() => handleClick(index)}
						className={`flip-card rounded-lg overflow-hidden ${
							Object.prototype.hasOwnProperty.call(currentFlip, index) || d.matched
								? 'rotate'
								: ''
						}`}>
						<div className="flip-card-inner">
							<div className="flip-card-front"></div>
							<div className="flip-card-back">
								<img src={d.url} alt={d.name} className="w-full h-full" />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
