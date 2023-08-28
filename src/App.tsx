import './App.css';
import { gameData } from './constants/data';

function App() {
	gameData[0].fliped = true;
	gameData[5].matched = true;
	return (
		<div className="md:px-60 px-5 py-10">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				{gameData.map((d: any) => (
					<div
						className={`flip-card rounded-lg overflow-hidden ${
							d.fliped || d.matched ? 'rotate' : ''
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
