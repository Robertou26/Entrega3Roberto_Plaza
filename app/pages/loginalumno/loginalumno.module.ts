import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginalumnoPageRoutingModule } from './loginalumno-routing.module';

import { LoginalumnoPage } from './loginalumno.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginalumnoPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [LoginalumnoPage]
})
export class LoginalumnoPageModule {}
