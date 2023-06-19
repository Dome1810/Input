import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvartPageRoutingModule } from './avart-routing.module';

import { AvartPage } from './avart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvartPageRoutingModule
  ],
  declarations: [AvartPage]
})
export class AvartPageModule {}
