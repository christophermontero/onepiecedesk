import { Component } from '@angular/core';

@Component({
  selector: 'app-keel',
  templateUrl: './keel.component.html',
  styleUrls: ['./keel.component.less']
})
export class KeelComponent {
  currentYear: number;
  repository: string;

  constructor() {
    this.currentYear = new Date().getFullYear();
    this.repository = 'https://github.com/christophermontero/onepiecedesk.git';
  }
}
