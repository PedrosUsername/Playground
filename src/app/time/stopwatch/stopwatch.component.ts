import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.sass']
})
export class StopwatchComponent{

  min = 0
  sec = 0
  mil = 0

  constructor() {
    // current date and time snapshot
    let timeSnapshot = this.now()
    // current timer display snapshot
    let m = this.min
    let s = this.sec    
    let mi = this.mil
    let my_var = setInterval(() => {

    // elapsed time since snapshot
    let aux = new Date( this.now().getTime() - timeSnapshot.getTime() )
    // timer display reset
    let timer = new Date( timeSnapshot.getTime() - timeSnapshot.getTime() ) 
    // timer display update
    timer = new Date ( aux.getTime() )

    this.min = timer.getUTCMinutes()
    this.sec = timer.getUTCSeconds()
    this.mil = timer.getMilliseconds()
  
    }, 1);
  }

  now(): Date {
    let now = new Date()
    return now
  }  
}
