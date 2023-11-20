import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EleccionloginPageRoutingModule } from './eleccionlogin-routing.module';

import { EleccionloginPage } from './eleccionlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EleccionloginPageRoutingModule
  ],
  declarations: [EleccionloginPage]
})
export class EleccionloginPageModule {}
