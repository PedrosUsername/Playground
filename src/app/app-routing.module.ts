import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeModule } from './time/time.module';

const routes: Routes = [
  { path: '', redirectTo: '/clock', pathMatch: 'full' },
  // lazy loaded paths
  { 
    path: 'stopwatch',
    loadChildren: () => import('./time/time.module').then(m => m.TimeModule)
  },
  {
    path: 'timer',
    loadChildren: () => import('./time/time.module').then(m => m.TimeModule)
  },
  { 
    path: 'timer-container',
    loadChildren: () => import('./time/time.module').then(m => m.TimeModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TimeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
