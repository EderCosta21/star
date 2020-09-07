import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Filme4PageRoutingModule } from './filme4-routing.module';

import { Filme4Page } from './filme4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Filme4PageRoutingModule
  ],
  declarations: [Filme4Page]
})
export class Filme4PageModule {}
