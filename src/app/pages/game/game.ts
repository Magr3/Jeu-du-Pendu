import { Component, HostListener, OnInit } from '@angular/core';
import { GameServices } from '../../services/game';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game implements OnInit {
  constructor (private gs: GameServices) {}

  public ngOnInit(): void {
    this.gs.startGame()
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(e : KeyboardEvent) {
    this.gs.guessLetter(e.key.toUpperCase())
  }
}
