import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BigTravelComponent } from './big-travel.component';
const routes: Routes = [
  {
    path: '', component: BigTravelComponent,
    children:[
      {
        path: 'naves', 
        loadChildren: () => import('../../../modules/naves/naves.module').then(m => m.NavesModule)
      },
      {
        path: '', 
        loadChildren: () => import('../../../modules/viajes/viajes.module').then(m => m.ViajesModule)
      },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BigTravelRoutingModule { }
