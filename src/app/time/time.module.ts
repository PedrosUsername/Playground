import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadPipe } from '../shared/pipes/pad.pipe';
import { ClockComponent } from './clock/clock.component';
import { TimeRoutingModule } from './time-routing.module';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { TimerComponent } from './timer/timer.component';
import { TimerContainerComponent } from './timer-container/timer-container.component';
import { TimerPresenterComponent } from './timer-container/timer-presenter/timer-presenter.component';
import { TimeComponent } from './time.component';


@NgModule({
  declarations: [
    PadPipe,
    ClockComponent,
    StopwatchComponent,
    TimerComponent,
    TimerContainerComponent,
    TimerPresenterComponent,
    TimeComponent
  ],
  imports: [
    CommonModule,
    TimeRoutingModule
  ],
  exports: []
})
export class TimeModule { }
