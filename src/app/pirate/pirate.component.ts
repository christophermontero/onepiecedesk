import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IPirate } from '../interfaces/pirate';

@Component({
  selector: 'app-pirate',
  templateUrl: './pirate.component.html',
  styleUrls: ['./pirate.component.less']
})
export class PirateComponent {
  @Input() pirate: IPirate;

  constructor(public activeModal: NgbActiveModal) {
    this.pirate = {} as IPirate;
  }
}
