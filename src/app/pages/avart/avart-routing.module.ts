import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvartPage } from './avart.page';

const routes: Routes = [
  {
    path: '',
    component: AvartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvartPageRoutingModule {}
