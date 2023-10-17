import { NgModule } from '@angular/core';
import { PiratesComponent } from './pirates.component';
import { PaginatorModule } from '../paginator/paginator.module';
import { HeaderModule } from '../header/header.module';
import { PiratesRoutingModule } from './pirates-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PirateComponent } from '../pirate/pirate.component';

@NgModule({
  imports: [PaginatorModule, HeaderModule, PiratesRoutingModule, CommonModule, HttpClientModule],
  declarations: [PiratesComponent, PirateComponent]
})

export class PiratesModule { }