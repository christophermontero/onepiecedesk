import { Component } from '@angular/core';

@Component({
  selector: 'app-keel',
  templateUrl: './keel.component.html',
  styleUrls: ['./keel.component.less']
})
export class KeelComponent {
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}
