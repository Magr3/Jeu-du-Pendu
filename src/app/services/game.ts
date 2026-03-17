import { Injectable, signal } from '@angular/core';
import { PlayedLetter, GameRecord } from '../models/game.models';
import { WordApi } from './word-api';

@Injectable({
  providedIn: 'root',
})

export class GameServices {
  constructor(private apiService: WordApi ){}

  word = signal("")
  letters = signal<PlayedLetter[]>([])
  errors = signal(0)
  record = signal(0)
  status = signal<"playing"|"won"|"lost">("playing")
  gameHistory = signal<GameRecord[]>([])
  isError = signal(false)


  public startGame() {

    this.letters.set([]);
    this.errors.set(0);
    this.status.set("playing");
    this.word.set("");
    this.isError.set(false);

    this.apiService.getRandomWord().subscribe({
      next: (response) => {
        console.log(response)
        if (/^[A-Z]+$/.test(response[0].word)) {
          this.word.set(response[0].word);
        } else {
          this.startGame();
        }
      },
      error: (err) => {
        console.error('API Error:', err);
        this.isError.set(true);
      }
    })
  }

  private isWordGuessed(): boolean {
    return this.word().split('').every(l => this.letters().some(x => x.letter === l));
  }

  private addToHistory(value : boolean) {
    this.gameHistory.update(currentState => [...currentState, {
      date: new Date().toLocaleDateString(),
      word: this.word(),
      letters: this.letters(),
      errors: this.errors(),
      won: value,
    }])
  }

  public guessLetter(letter: string) {

    if (this.status() !== 'playing' || this.word() === '') return;

    if (!this.letters().some(l => l.letter === letter) && /^[A-Z]$/.test(letter)) {
      if (this.word().includes(letter)){
        this.letters.update(lettersList => [...lettersList, {
          letter: letter,
          isCorrect: true
        }])

        if (this.isWordGuessed()) {
          this.addToHistory(true)
          this.record.update(e => e + 1)
          this.status.set("won")
        }

      } else {
        this.letters.update(lettersList => [...lettersList, {
          letter: letter,
          isCorrect: false
        }])
        this.errors.update(e => e + 1)

        if (this.errors() >= 6) {
          this.addToHistory(false)
          this.record.set(0)
          this.status.set("lost")
        }
      }
    }
  }
}
