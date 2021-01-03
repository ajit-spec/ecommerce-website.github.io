import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Comp2Component} from './comp2/comp2.component';
import {Comp7Component} from './comp7/comp7.component';
import {Comp10Component} from './comp10/comp10.component';
import {Comp11Component} from './comp11/comp11.component';
import {Comp12Component} from './comp12/comp12.component';
import {Comp13Component} from './comp13/comp13.component';

const routes: Routes = [
  {
    path: '',
    component: Comp2Component
  },
  {
    path: 'women-apparel',
    component: Comp7Component
  },
  {
    path: 'men-apparel',
    component: Comp10Component
  },
  {
    path: 'login',
    component: Comp11Component
  },
  {
    path: 'signup',
    component: Comp12Component
  },
  {
    path: '404',
    component: Comp13Component
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
