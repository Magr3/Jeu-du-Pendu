import { Component } from '@angular/core';
import { GameServices } from '../../services/game';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-history',
  imports: [RouterLink],
  templateUrl: './history.html',
  styleUrl: './history.css',
})
export class History {
  constructor(protected gs : GameServices) {}

}
