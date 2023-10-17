import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/pirates', pathMatch: 'full' },
  { path: 'pirates', loadChildren: () => import('./pirates/pirates.module').then(m => m.PiratesModule) },
  { path: 'ships', loadChildren: () => import('./ships/ships.module').then(m => m.ShipsModule) },
  { path: '**', loadChildren: () => import('./pirates/pirates.module').then(m => m.PiratesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
