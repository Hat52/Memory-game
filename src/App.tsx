import { useEffect, useState } from 'react';
import './App.css';
import { gameData } from './constants/data';

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
			<div className="sidebar absolute top-0 bottom-0 w-[10%] justify-center shadow-[#6DF6F2] bg-[#6DF6F260] shadow-lg flex flex-col">
				<Item title="Guesses" value={guesses} />
				<Item title="Matches" value={matches} />
				<Item title="Percentage" value={`${Math.floor((100 * matches) / 6)}%`} />
				{matches === 6 ? <Item title="You Won" /> : null}
				{matches === 6 ? (
					<button
						onClick={handleReset}
						className="bg-[#57D0C3] mx-5 p-2 text-white font-bold mt-10 rounded-md">
						RESET
					</button>
				) : null}
			</div>
			<div className="md:px-60 px-5 py-10 relative">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
					{gameData.map((d: any, index: number) => (
						<div
							onClick={() =>
								currentFlips.some((flip: number) => flip === index) || d.matched
									? () => {}
									: handleClick(index)
							}
							className={`flip-card 2xl:h-[250px] rounded-lg overflow-hidden cursor-pointer ${
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

type TItem = {
	title: string;
	value?: string | number | boolean;
};

const Item = ({ title, value }: TItem) => {
	return (
		<div className="flex items-center my-5 flex-col gap-1">
			<h3 className="font-bold uppercase text-[18px]">{title}</h3>
			<p className="text-medium">{value}</p>
		</div>
	);
};

export default App;
