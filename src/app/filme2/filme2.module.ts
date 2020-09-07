import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Filme2PageRoutingModule } from './filme2-routing.module';

import { Filme2Page } from './filme2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Filme2PageRoutingModule
  ],
  declarations: [Filme2Page]
})
export class Filme2PageModule {}
