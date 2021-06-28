import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BigTravelAuthRoutingModule } from './big-travel-auth-routing.module';
import { HeaderComponent } from './header/header.component';
import { BigTravelAuthComponent } from './big-travel-auth.component';
import { ComponentsModule } from '../../../shared/components/components.module';

@NgModule({
  declarations: [HeaderComponent, BigTravelAuthComponent],
  imports: [
    CommonModule,
    BigTravelAuthRoutingModule,
    ComponentsModule
  ]
})
export class BigTravelAuthModule { }
