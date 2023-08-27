import './App.css';

function App() {
	return (
		<div className="md:px-40 px-5 py-10">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				{Array(12)
					.fill(0)
					.map(() => (
						<div className="flip-card">
							<div className="flip-card-inner">
								<div className="flip-card-front"></div>
								<div
									// className={`w-full h-[200px] transform duration-300  hover:rotate-180 shadow-lg bg-[#DFDBE5] rounded-lg`}
									className="flip-card-back">
									asd
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default App;
