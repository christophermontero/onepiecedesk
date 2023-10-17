import { NgModule } from '@angular/core';
import { ShipsComponent } from './ships.component';
import { PaginatorModule } from '../paginator/paginator.module';
import { HeaderModule } from '../header/header.module';
import { ShipsRoutingModule } from './ships-routing.module';
import { ShipComponent } from '../ship/ship.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [PaginatorModule, HeaderModule, ShipsRoutingModule, CommonModule, HttpClientModule],
  declarations: [ShipsComponent, ShipComponent]
})
export class ShipsModule { }