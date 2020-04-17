import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottonsPage } from './bottons.page';

const routes: Routes = [
  {
    path: '',
    component: BottonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottonsPageRoutingModule {}
