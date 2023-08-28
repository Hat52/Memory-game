import scobyDoo from '../assets/scoobyDoo.svg';
import JJK from '../assets/jjk.jpg';
import itachi from '../assets/itachi.jpg';
import inazuma from '../assets/inazuma.jpg';
import dz from '../assets/dz.jpg';
import onePiece from '../assets/onepiece.jpg';

type TGameData = {
	url: any;
	name: string;
	fliped?: boolean;
	matched?: boolean;
};

export const gameData: TGameData[] = [
	{
		url: scobyDoo,
		name: 'scobby-do'
	},
	{
		url: JJK,
		name: 'jjk'
	},
	{
		url: JJK,
		name: 'jjk'
	},
	{
		url: scobyDoo,
		name: 'scobby-do'
	},
	{
		url: itachi,
		name: 'itachi'
	},
	{
		url: itachi,
		name: 'itachi'
	},
	{
		url: inazuma,
		name: 'inazuma'
	},
	{
		url: inazuma,
		name: 'inazuma'
	},
	{
		url: dz,
		name: 'dz'
	},
	{
		url: dz,
		name: 'dz'
	},
	{
		url: onePiece,
		name: 'onePiece'
	},
	{
		url: onePiece,
		name: 'onePiece'
	}
];
