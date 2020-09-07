import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Filme5PageRoutingModule } from './filme5-routing.module';

import { Filme5Page } from './filme5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Filme5PageRoutingModule
  ],
  declarations: [Filme5Page]
})
export class Filme5PageModule {}
