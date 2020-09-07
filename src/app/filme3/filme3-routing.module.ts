import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Filme3Page } from './filme3.page';

const routes: Routes = [
  {
    path: '',
    component: Filme3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Filme3PageRoutingModule {}
