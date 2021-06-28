import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BigTravelAuthComponent } from './big-travel-auth.component';

const routes: Routes = [{
  path:'',
  component:BigTravelAuthComponent,
  children: [
    {
      path: '', 
      loadChildren: () => import('../../../auth/auth.module').then(m => m.AuthModule)
    },
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BigTravelAuthRoutingModule { }
