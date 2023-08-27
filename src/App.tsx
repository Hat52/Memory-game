import './App.css';
import Background from './assets/card.svg';

function App() {
	return (
		<div className="md:px-40 px-5 py-10">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				{Array(12)
					.fill(0)
					.map(() => (
						<div className="flip-card rounded-lg overflow-hidden">
							<div className="flip-card-inner">
								<div className="flip-card-front" style={{ background: Background }}></div>
								<div className="flip-card-back">asd</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default App;
