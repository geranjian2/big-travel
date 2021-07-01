import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
import { BigTravelRoutingModule } from './big-travel-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BigTravelComponent } from './big-travel.component';
import { ComponentsModule } from '../../../shared/components/components.module';
import { ImagePipe } from '@pipes/image.pipe';



@NgModule({
  declarations: [SidenavComponent, HeaderComponent, FooterComponent, BigTravelComponent,ImagePipe],
  imports: [
    CommonModule,
    BigTravelRoutingModule,
    NgxSpinnerModule,
    ComponentsModule,
    ]
})
export class BigTravelModule { }
