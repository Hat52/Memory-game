import { useEffect, useState } from 'react';
import './App.css';
import { gameData } from './constants/data';
import { Sidebar } from './components';
import ReactConfetti from 'react-confetti';

function App() {
	const [currentFlips, setCurrentFlips] = useState<number[]>([]);
	const [guesses, setGuesses] = useState(0);
	const [matches, setMatches] = useState(0);
	const [matched, setMatched] = useState<number[]>([]);

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
				setMatched((prev) => [...prev, currentFlips[1], currentFlips[0]]);
				setMatches((prevMatches) => prevMatches + 1);
			}
		}
	}, [currentFlips]);

	const handleReset = () => {
		shuffleGameData();
		setGuesses(0);
		setMatches(0);
		setMatched([]);
		setCurrentFlips([]);
	};

	return (
		<div>
			{matches === 6 ? (
				<>
					<div className="absolute bg-transparent m-auto left-0 right-0 top-0 bottom-0 flex justify-center items-center z-10">
						<div className="w-[20%] h-[20%] shadow-lg flex flex-col gap-5 justify-center items-center bg-[#ffffff90] rounded-lg">
							<h1 className="font-black text-[20px]">You Won</h1>
							<button
								onClick={handleReset}
								className="bg-[#57D0C3] w-[50%] p-2 text-white font-bold rounded-md">
								RESET
							</button>
						</div>
					</div>
					<ReactConfetti width={window.innerWidth} height={window.innerHeight} />
				</>
			) : null}
			<Sidebar guesses={guesses} matches={matches} />
			<div className="md:px-60 px-5 py-10 relative">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
					{gameData.map((d: any, index: number) => (
						<div
							onClick={() =>
								currentFlips.some((flip: number) => flip === index) ||
								matched.some((match: number) => match === index)
									? () => {}
									: handleClick(index)
							}
							className={`flip-card 2xl:h-[250px] cursor-pointer ${
								currentFlips.some((flip: number) => flip === index) ||
								matched.some((match: number) => match === index)
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
