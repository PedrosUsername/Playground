import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { TimerComponent } from './timer/timer.component';
import { TimerContainerComponent } from './timer-container/timer-container.component';
import { TimeComponent } from './time.component';


const routes: Routes = [
  {
    path: 'time',
    component: TimeComponent,
    children: [
      {
        path: 'clock',
        component: ClockComponent
      },
      {
        path: 'stopwatch',
        component: StopwatchComponent
      },
      {
        path: 'timer',
        component: TimerComponent
      },
      {
        path: 'timer-container',
        component: TimerContainerComponent
      },

      { path: '', redirectTo: 'clock', pathMatch: 'full' }
    ]
  },

  { path: '', redirectTo: 'time/clock', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeRoutingModule { }
