import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Filme6PageRoutingModule } from './filme6-routing.module';

import { Filme6Page } from './filme6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Filme6PageRoutingModule
  ],
  declarations: [Filme6Page]
})
export class Filme6PageModule {}
