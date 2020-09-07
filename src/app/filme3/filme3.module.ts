import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Filme3PageRoutingModule } from './filme3-routing.module';

import { Filme3Page } from './filme3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Filme3PageRoutingModule
  ],
  declarations: [Filme3Page]
})
export class Filme3PageModule {}
