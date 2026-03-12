export interface PlayedLetter {
    letter: string;
    isCorrect: boolean;
}

export interface GameRecord {
    date: Date;
    word: string;
    guessedLetters: string[];
    errors: number;
    won: boolean;
}