import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { PadPipe } from './shared/pipes/pad.pipe';
import { TimerComponent } from './timer/timer.component';
import { TimerContainerComponent } from './timer2/timer-container/timer-container.component';
import { TimerPresenterComponent } from './timer2/timer-container/timer-presenter/timer-presenter.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    StopwatchComponent,
    PadPipe,
    TimerComponent,
    TimerContainerComponent,
    TimerPresenterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
