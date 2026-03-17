import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-game-over-modal',
  imports: [],
  templateUrl: './game-over-modal.html',
  styleUrl: './game-over-modal.css',
})
export class GameOverModal {
  status = input<'won' | 'lost' | 'playing'>('won');
  word = input('');
  replay = output();
}
