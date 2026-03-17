import { Component, HostListener, OnInit } from '@angular/core';
import { GameServices } from '../../services/game';
import { RouterLink } from '@angular/router';
import { HangmanDraw } from '../../components/hangman-draw/hangman-draw';
import { LettersUsed } from "../../components/letters-used/letters-used";

@Component({
  selector: 'app-game',
  imports: [RouterLink, HangmanDraw, LettersUsed],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game implements OnInit {
  constructor (protected gs: GameServices) {}

  public ngOnInit(): void {
    this.gs.startGame()
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(e : KeyboardEvent) {
    this.gs.guessLetter(e.key.toUpperCase())
  }
}
