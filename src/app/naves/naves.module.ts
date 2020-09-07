import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavesPageRoutingModule } from './naves-routing.module';

import { NavesPage } from './naves.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavesPageRoutingModule
  ],
  declarations: [NavesPage]
})
export class NavesPageModule {}
