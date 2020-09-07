import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Filme5Page } from './filme5.page';

const routes: Routes = [
  {
    path: '',
    component: Filme5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Filme5PageRoutingModule {}
