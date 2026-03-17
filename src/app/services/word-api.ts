import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Word } from '../models/game.models';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WordApi {
  constructor(
    private http: HttpClient
  ) {}

  public getRandomWord(){
    return this.http.get<Word[]>("https://random-words-api.kushcreates.com/api?language=it&type=uppercase&words=1").pipe(
      map(value => {
        if (!value) {
          throw new Error("No words received")
        }
        return value;
      })
    )

  }
}
