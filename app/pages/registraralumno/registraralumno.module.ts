import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistraralumnoPageRoutingModule } from './registraralumno-routing.module';

import { RegistraralumnoPage } from './registraralumno.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistraralumnoPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [RegistraralumnoPage]
})
export class RegistraralumnoPageModule {}
