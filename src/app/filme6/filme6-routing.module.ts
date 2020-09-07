import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Filme6Page } from './filme6.page';

const routes: Routes = [
  {
    path: '',
    component: Filme6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Filme6PageRoutingModule {}
