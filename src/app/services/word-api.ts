import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Word } from '../models/game.models';

@Injectable({
  providedIn: 'root',
})
export class WordApi {
  constructor(private http: HttpClient) {}

  public getRandomWord(){
    
    return this.http.get<Word[]>("https://random-words-api.kushcreates.com/api?language=it&type=uppercase&words=1")

  }
}
