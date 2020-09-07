import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Filme4Page } from './filme4.page';

const routes: Routes = [
  {
    path: '',
    component: Filme4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Filme4PageRoutingModule {}
