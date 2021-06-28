import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavesRoutingModule } from './naves-routing.module';
import { NavesListComponent } from './naves-list/naves-list.component';


@NgModule({
  declarations: [NavesListComponent],
  imports: [
    CommonModule,
    NavesRoutingModule
  ]
})
export class NavesModule { }
