import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspeciesPage } from './especies.page';

const routes: Routes = [
  {
    path: '',
    component: EspeciesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspeciesPageRoutingModule {}
