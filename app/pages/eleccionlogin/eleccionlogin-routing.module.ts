import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EleccionloginPage } from './eleccionlogin.page';

const routes: Routes = [
  {
    path: '',
    component: EleccionloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EleccionloginPageRoutingModule {}
