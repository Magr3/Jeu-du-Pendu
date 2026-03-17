import { Component, input } from '@angular/core';
import { PlayedLetter } from '../../models/game.models';

@Component({
  selector: 'app-word-display',
  imports: [],
  templateUrl: './word-display.html',
  styleUrl: './word-display.css',
})
export class WordDisplay {
  word = input('');
  letters = input<PlayedLetter[]>([]);
}
