import { useEffect, useState } from 'react';
import './App.css';
import { gameData } from './constants/data';

function App() {
	const [currentFlips, setCurrentFlips] = useState<number[]>([]);

	const handleClick = (index: number) => {
		if (Object.keys(currentFlips).length >= 2) {
			if (gameData[currentFlips[0]].name === gameData[currentFlips[1]].name) {
				gameData[currentFlips[0]].matched = true;
				gameData[currentFlips[1]].matched = true;
			}
			setCurrentFlips([index]);
		} else {
			setCurrentFlips((prev) => [...prev, index]);
		}
	};

	useEffect(() => {
		for (let i = gameData.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[gameData[i], gameData[j]] = [gameData[j], gameData[i]];
		}
	}, []);

	return (
		<div className="md:px-60 px-5 py-10">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				{gameData.map((d: any, index: number) => (
					<div
						onClick={() => handleClick(index)}
						className={`flip-card 2xl:h-[250px] rounded-lg overflow-hidden ${
							currentFlips.some((flip: number) => flip === index) || d.matched
								? 'rotate'
								: ''
						}`}>
						<div className="flip-card-inner">
							<div className="flip-card-front"></div>
							<div className="flip-card-back">
								<img src={d.url} alt={d.name} className="w-full h-full object-cover" />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
