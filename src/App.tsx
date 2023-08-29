import { useEffect, useState } from 'react';
import './App.css';
import { gameData } from './constants/data';
import { Sidebar } from './components';
import ReactConfetti from 'react-confetti';

function App() {
	const [currentFlips, setCurrentFlips] = useState<number[]>([]);
	const [guesses, setGuesses] = useState(0);
	const [matches, setMatches] = useState(0);

	const handleClick = (index: number) => {
		if (currentFlips.length >= 2) {
			setCurrentFlips([index]);
		} else {
			setCurrentFlips((prev) => [...prev, index]);
		}
	};

	const shuffleGameData = () => {
		for (let i = gameData.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[gameData[i], gameData[j]] = [gameData[j], gameData[i]];
		}
	};

	useEffect(() => {
		shuffleGameData();
	}, []);

	useEffect(() => {
		if (currentFlips.length >= 2) {
			setGuesses((prevGuesses) => prevGuesses + 1);
			if (gameData[currentFlips[0]].name === gameData[currentFlips[1]].name) {
				gameData[currentFlips[0]].matched = true;
				gameData[currentFlips[1]].matched = true;
				setMatches((prevMatchs) => prevMatchs + 1);
			}
		}
	}, [currentFlips]);

	const handleReset = () => {
		shuffleGameData();
		setGuesses(0);
		setMatches(0);
	};

	return (
		<div>
			{matches === 6 ? (
				<ReactConfetti width={window.innerWidth} height={window.innerHeight} />
			) : null}
			<Sidebar guesses={guesses} matches={matches} handleReset={handleReset} />
			<div className="md:px-60 px-5 py-10 relative">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
					{gameData.map((d: any, index: number) => (
						<div
							onClick={() =>
								currentFlips.some((flip: number) => flip === index) || d.matched
									? () => {}
									: handleClick(index)
							}
							className={`flip-card 2xl:h-[250px] cursor-pointer ${
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
		</div>
	);
}

export default App;
