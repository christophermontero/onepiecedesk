import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IShip } from '../interfaces/ship';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.less']
})
export class ShipComponent {
  @Input() ship: IShip;

  constructor(public activeModal: NgbActiveModal) {
    this.ship = {} as IShip;
  }
}
