import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Filme1PageRoutingModule } from './filme1-routing.module';

import { Filme1Page } from './filme1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Filme1PageRoutingModule
  ],
  declarations: [Filme1Page]
})
export class Filme1PageModule {}
