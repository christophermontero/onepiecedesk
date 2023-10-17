import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PiratesComponent } from './pirates.component';

const routes: Routes = [
  { path: '', component: PiratesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PiratesRoutingModule { }