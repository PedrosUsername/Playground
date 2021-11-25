import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeModule } from './time/time.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TimeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
