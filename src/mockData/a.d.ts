// Define the Game interface
export interface Game {
	id: number;
	firmId: number;
	firmType: string;
	firmCode: string;
	firmName: string;
	gameCode: string;
	gameName: string;
	imgGame: string;
	imgBigGame: string | null; // Allow null values
	gameEntryTagName: string | null; // Allow null values
	markCollect: boolean;
	thirdGameCategory: string | null; // Allow null values
	countPlayed: number;
	supportTrial: number;
	maintain: number;
	gameType: string;
	jackpotAmount: number;
	jackpotOpen: number;
	extraParam: undefined| null;
 }