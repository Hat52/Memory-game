import './App.css';
import { gameData } from './constants/data';

function App() {
	return (
		<div className="md:px-40 px-5 py-10">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				{gameData.map((d: any) => (
					<div className="flip-card rounded-lg overflow-hidden">
						<div className="flip-card-inner">
							<div className="flip-card-front"></div>
							<div
								className="flip-card-back"
								style={{
									backgroundColor: 'black !important',
									backgroundImage: 'url("./assets/Dog-With-Blue-Eyes.svg") !important'
								}}>
								asdef
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
