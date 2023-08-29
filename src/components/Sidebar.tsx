type TSidebar = {
	matches: number;
	guesses: number;
	handleReset: () => void;
};
export default function Sidebar({ guesses, matches, handleReset }: TSidebar) {
	return (
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
