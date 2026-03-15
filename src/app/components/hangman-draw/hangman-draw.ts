import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hangman-draw',
  imports: [],
  templateUrl: './hangman-draw.html',
  styleUrl: './hangman-draw.css',
})
export class HangmanDraw {
  errors = input(0)
}
