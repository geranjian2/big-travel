import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViajesRoutingModule } from './viajes-routing.module';
import { ListViajeComponent } from './list-viaje/list-viaje.component';
import { DetailViajeComponent } from './detail-viaje/detail-viaje.component';
import { NavesViajesListComponent } from './naves-viajes-list/naves-viajes-list.component';
import { RentNaveComponent } from './rent-nave/rent-nave.component';
import { PipesModule } from '@pipes/pipes.module';


@NgModule({
  declarations: [ListViajeComponent, DetailViajeComponent, NavesViajesListComponent, RentNaveComponent],
  imports: [
    CommonModule,
    ViajesRoutingModule,
    PipesModule.forRoot()
  ]
})
export class ViajesModule { }
