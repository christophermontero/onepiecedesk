import { Component } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IPirate } from '../interfaces/pirate';
import { PirateComponent } from '../pirate/pirate.component';
import { PirateService } from '../services/pirates/pirate.service';

@Component({
  selector: 'app-pirates',
  templateUrl: './pirates.component.html',
  styleUrls: ['./pirates.component.less']
})
export class PiratesComponent {
  pirates: IPirate[] = [];
  cardsLength: number = 0;
  cardsPerPage: number = 6;
  currentPage: number = 1;

  constructor(
    private modalService: NgbModal,
    private pirateService: PirateService
  ) {}

  ngOnInit(): void {
    this.pirateService.getPirates().subscribe((pirates: IPirate[]) => {
      this.pirates = pirates;
      this.cardsLength = this.pirates.length;
    });
  }

  handleCurrPageChanged(newPage: number): void {
    this.currentPage = newPage;
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.cardsPerPage;
  }

  get endIndex(): number {
    return this.currentPage * this.cardsPerPage;
  }

  openPirateModal(pirate: IPirate): void {
    const modalRef = this.modalService.open(PirateComponent);
    modalRef.componentInstance.pirate = pirate;
  }
}
