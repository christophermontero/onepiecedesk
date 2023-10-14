import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IShip } from 'src/app/interfaces/ship';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  private _url: string = '../../assets/data/ships.json';

  constructor(private http: HttpClient) {}

  getShips() {
    return this.http.get<IShip[]>(this._url);
  }
}
