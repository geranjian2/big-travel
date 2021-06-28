import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViajeComponent } from './list-viaje/list-viaje.component';
import { NavesViajesListComponent } from './naves-viajes-list/naves-viajes-list.component';
import { RentNaveComponent } from './rent-nave/rent-nave.component';

const routes: Routes = [
  {
  path: '',
  component: ListViajeComponent
  },
  {
  path: 'travel',
  component: NavesViajesListComponent
  }
  ,
  {
  path: 'rent',
  component: RentNaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViajesRoutingModule { }
