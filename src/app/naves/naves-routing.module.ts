import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavesPage } from './naves.page';

const routes: Routes = [
  {
    path: '',
    component: NavesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavesPageRoutingModule {}
