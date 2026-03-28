export enum GameStatus {
	Ongoing = "ONGOING",
	Won = "WON",
	Lost = "LOST",
};

export enum CellColor {
	Whitesmoke = "whitesmoke",
	White = "white",
	Khaki = "khaki",
	Lightgreen = "lightgreen",
};

export type GridType = {
	currentAttempt: number;
	gridData: GridRowType[];
	keypad: KeypadCell[][];
	status: GameStatus;
};

export type GridCellType = {
	value: string;
	color: CellColor;
};

export type GridRowType = {
	rowData: GridCellType[];
	isSubmitted: boolean;
};

export type KeypadCell = {
	value: string;
	color: CellColor;
};

export type AddCharFunction = (key: string) => void;

export enum WORDLE_ACTIONS {
	ADD_CHAR = 'ADD_CHAR',
	SUBMIT_ATTEMPT = 'SUBMIT_ATTEMPT',
	RESET= 'RESET',
};

export type WordleAction =
	| { type: typeof WORDLE_ACTIONS.ADD_CHAR; payload: { key: string; attempts: number } }
	| { type: typeof WORDLE_ACTIONS.SUBMIT_ATTEMPT; payload: { correctWord: string; attempts: number } }
	| { type: typeof WORDLE_ACTIONS.RESET; payload: { wordLength: number; attempts: number } };

