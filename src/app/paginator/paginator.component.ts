import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.less']
})
export class PaginatorComponent {
  @Input() cardsLength: number = 0;
  @Input() currentPage: number = 1;
  @Input() cardsPerPage: number = 0;
  @Output() currPageChanged: EventEmitter<number> = new EventEmitter();

  totalPages: number = 0;

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.cardsLength / this.cardsPerPage);
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.currPageChanged.emit(this.currentPage);
  }
}
