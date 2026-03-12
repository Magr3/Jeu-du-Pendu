import { Injectable } from '@angular/core';
import { PlayedLetter, GameRecord } from '../models/game.models';

@Injectable({
  providedIn: 'root',
})

export class GameServices {
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

}
