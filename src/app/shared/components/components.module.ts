import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerDefaultComponent } from './banners/banner-default/banner-default.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxDefaultComponent } from './checkbox/checkbox-default/checkbox-default.component';
import { LoginDefaultComponent } from './logins/login-default/login-default.component';
import { RegisterDefaultComponent } from './registers/register-default/register-default.component';

@NgModule({
  declarations: [
    LoginDefaultComponent,
    RegisterDefaultComponent,
    BannerDefaultComponent,
    CheckboxDefaultComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    BannerDefaultComponent,
    LoginDefaultComponent,
    RegisterDefaultComponent,
    CheckboxDefaultComponent
  ]
})
export class ComponentsModule { }
