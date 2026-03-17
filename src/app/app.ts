import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameServices } from './services/game';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(protected gs : GameServices){}
  protected readonly title = signal('Pendu_Angular');
}
