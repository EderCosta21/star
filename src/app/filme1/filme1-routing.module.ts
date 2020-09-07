import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Filme1Page } from './filme1.page';

const routes: Routes = [
  {
    path: '',
    component: Filme1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Filme1PageRoutingModule {}
