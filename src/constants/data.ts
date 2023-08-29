import sharigun from '../assets/sharigun.jpg';
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
		url: onePiece,
		name: 'onePiece'
	},
	{
		url: sharigun,
		name: 'sharigun.jpg'
	},

	{
		url: JJK,
		name: 'jjk'
	},

	{
		url: itachi,
		name: 'itachi'
	},
	{
		url: JJK,
		name: 'jjk'
	},

	{
		url: inazuma,
		name: 'inazuma'
	},
	{
		url: itachi,
		name: 'itachi'
	},
	{
		url: sharigun,
		name: 'sharigun.jpg'
	},

	{
		url: dz,
		name: 'dz'
	},
	{
		url: inazuma,
		name: 'inazuma'
	},

	{
		url: onePiece,
		name: 'onePiece'
	},
	{
		url: dz,
		name: 'dz'
	}
];
