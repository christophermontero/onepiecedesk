import { Component } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IPirate } from '../interfaces/pirate';
import { PirateService } from '../services/pirates/pirates.service';

@Component({
  selector: 'app-pirates',
  templateUrl: './pirates.component.html',
  styleUrls: ['./pirates.component.less']
})
export class PiratesComponent {
  pirates: IPirate[];
  page: number;
  pageSize: number;
  headlineTitle: string;

  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private pirateService: PirateService
  ) {
    this.pirates = [];
    this.page = 1;
    this.pageSize = 10;
    this.headlineTitle = '';
  }

  ngOnInit(): void {
    this.pirateService.getPirates().subscribe((pirates: IPirate[]) => {
      this.pirates = pirates;
    });
    this.route.url.subscribe((url: UrlSegment[]) => {
      this.headlineTitle = url[0].path
        ? url[0].path.charAt(0).toUpperCase() + url[0].path.slice(1)
        : 'Pirates';
    });
  }

  get startIndex(): number {
    return (this.page - 1) * this.pageSize;
  }

  get endIndex(): number {
    return this.page * this.pageSize;
  }

  openPirateModal(pirate: IPirate): void {
    const modalRef = this.modalService.open(PirateComponent);
    modalRef.componentInstance.pirate = pirate;
  }
}
