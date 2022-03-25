import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/layouts/big-travel/big-travel.module').then(m => m.BigTravelModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./shared/layouts/big-travel-auth/big-travel-auth.module').then(m => m.BigTravelAuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
