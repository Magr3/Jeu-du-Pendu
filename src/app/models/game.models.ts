export interface PlayedLetter {
    letter: string;
    isCorrect: boolean;
}

export interface GameRecord {
    date: Date;
    word: string;
    letters: PlayedLetter[];
    errors: number;
    won: boolean;
}

export interface Word {
    word: string;
    length: number;
    category: string;
    language: string;
}