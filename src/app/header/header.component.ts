import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.less']
})
export class HeadlineComponent {
  @Input() headlineTitle: string = '';

  constructor() {}
}
