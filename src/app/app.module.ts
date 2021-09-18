import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { PadPipe } from './shared/pipes/pad.pipe';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    StopwatchComponent,
    PadPipe,
    TimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
