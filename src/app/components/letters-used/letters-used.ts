import { Component, input } from '@angular/core';
import { PlayedLetter } from '../../models/game.models';

@Component({
  selector: 'app-letters-used',
  imports: [],
  templateUrl: './letters-used.html',
  styleUrl: './letters-used.css',
})
export class LettersUsed {
  letters = input<PlayedLetter[]>([])
}
