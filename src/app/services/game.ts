import { Injectable } from '@angular/core';
import { PlayedLetter, GameRecord } from '../models/game.models';
import { WordApi } from './word-api';

@Injectable({
  providedIn: 'root',
})

export class GameServices {
  constructor(private apiService: WordApi ){}

  word: string = "";
  letters: PlayedLetter[] = [];
  errors: number = 0;
  gameHistory : GameRecord[] = [];
  record: number = 0;
  status: "playing" | "won" | "lost" = 'playing'

  private wordList: string[] = ['ANGULAR', 'TYPESCRIPT', 'SERVICE', 'COMPONENT'];
  public startGame() {
    this.letters = [];
    this.errors = 0;
    this.status = "playing";
    

    this.word = this.wordList[Math.floor(Math.random() * this.wordList.length)]
  }

  private isWordGuessed(): boolean {
    return this.word.split('').every(l => this.letters.some(x => x.letter === l));
  }

  private addToHistory(value : boolean) {
    this.gameHistory.push({
      date: new Date(),
      word: this.word,
      letters: this.letters,
      errors: this.errors,
      won: value,
    })
  }

  public guessLetter(letter: string) {

    if (!this.letters.some(l => l.letter === letter) && /^[A-Z]$/.test(letter)) {
      if (this.word.includes(letter)){
        this.letters.push({
          letter: letter,
          isCorrect: true
        })

        if (this.isWordGuessed()) {
          this.addToHistory(true)
          this.record += 1
          this.status = "won"
              
        }

      } else {
        this.letters.push({
          letter: letter,
          isCorrect: false
        })
        this.errors += 1

        if (this.errors >= 5) {
          this.addToHistory(false)
          this.record = 0
          this.status = "lost"
        }
      }
    }
  }
}


