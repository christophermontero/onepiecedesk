import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPirate } from 'src/app/interfaces/pirate';

@Injectable({
  providedIn: 'root'
})
export class PirateService {
  private _url: string = '../../assets/data/pirates.json';

  constructor(private http: HttpClient) {}

  getPirates() {
    return this.http.get<IPirate[]>(this._url);
  }
}
