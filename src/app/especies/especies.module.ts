import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspeciesPageRoutingModule } from './especies-routing.module';

import { EspeciesPage } from './especies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspeciesPageRoutingModule
  ],
  declarations: [EspeciesPage]
})
export class EspeciesPageModule {}
