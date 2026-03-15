import { Component, HostListener, OnInit } from '@angular/core';
import { GameServices } from '../../services/game';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game',
  imports: [RouterLink],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game implements OnInit {
  constructor (protected gs: GameServices) {}

  // public ngOnInit(): void {
  //   this.gs.startGame()
  // }

    public ngOnInit(): void {
    this.gs.startGame()
    console.log('word:', this.gs.word)
    }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(e : KeyboardEvent) {
    this.gs.guessLetter(e.key.toUpperCase())
  }
}
