import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiratesComponent } from './pirates/pirates.component';
import { ShipsComponent } from './ships/ships.component';

const routes: Routes = [
  { path: '', redirectTo: '/pirates', pathMatch: 'full' },
  { path: 'pirates', component: PiratesComponent },
  { path: 'ships', component: ShipsComponent },
  { path: '**', component: PiratesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [PiratesComponent, ShipsComponent];
