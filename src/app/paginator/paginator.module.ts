import { NgModule } from '@angular/core';
import { PaginatorComponent } from './paginator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [NgbModule, CommonModule],
  declarations: [PaginatorComponent],
  exports: [PaginatorComponent]
})

export class PaginatorModule { }