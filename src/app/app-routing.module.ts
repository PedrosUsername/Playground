import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { TimerComponent } from './timer/timer.component';
import { TimerContainerComponent } from './timer2/timer-container/timer-container.component';

const routes: Routes = [
  { path: 'clock', component: ClockComponent },
  { path: 'stopwatch', component: StopwatchComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'timer-container', component: TimerContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
