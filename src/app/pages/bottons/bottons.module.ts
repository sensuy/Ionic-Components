import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BottonsPageRoutingModule } from './bottons-routing.module';

import { BottonsPage } from './bottons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BottonsPageRoutingModule
  ],
  declarations: [BottonsPage]
})
export class BottonsPageModule {}
