import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Filme2Page } from './filme2.page';

const routes: Routes = [
  {
    path: '',
    component: Filme2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Filme2PageRoutingModule {}
