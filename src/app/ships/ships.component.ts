import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IShip } from '../interfaces/ship';
import { ShipService } from '../services/ship/ship.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.less']
})
export class ShipsComponent {
  ships: IShip[];
  page: number;
  pageSize: number;
  headlineTitle: string;

  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private shipService: ShipService
  ) {
    this.ships = [];
    this.page = 1;
    this.pageSize = 10;
    this.headlineTitle = '';
  }

  ngOnInit(): void {
    this.shipService.getShips().subscribe((ships: IShip[]) => {
      this.ships = ships;
    });
    this.route.url.subscribe((url: any) => {
      this.headlineTitle = url[0].path
        ? url[0].path.charAt(0).toUpperCase() + url[0].path.slice(1)
        : 'Ships';
    });
  }

  get startIndex(): number {
    return (this.page - 1) * this.pageSize;
  }

  get endIndex(): number {
    return this.page * this.pageSize;
  }

  openShipModal(ship: IShip): void {
    const modalRef = this.modalService.open(ShipComponent);
    modalRef.componentInstance.ship = ship;
  }
}
