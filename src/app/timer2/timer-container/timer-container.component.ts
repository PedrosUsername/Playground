import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-container',
  templateUrl: './timer-container.component.html',
  styleUrls: ['./timer-container.component.sass']
})
export class TimerContainerComponent implements OnInit {

  hou = 0
  min = 0
  sec = 0

  disable!: boolean;

  ngOnInit(){
    this.disable = false;
  }


  run(): void {
    this.disable = true;

    // current date and time snapshot
    let timeSnapshot = this.now()
    // current timer display snapshot
    let h = this.hou
    let m = this.min
    let s = this.sec
    let my_var = setInterval(() => {

      // elapsed time since snapshot
      let aux = new Date( this.now().getTime() - timeSnapshot.getTime() )
       // timer display reset
      let timer = new Date( timeSnapshot.getTime() - timeSnapshot.getTime() )
      timer.setUTCHours(h) 
      timer.setUTCMinutes(m)
      timer.setUTCSeconds(s)
      // timer display update
      timer = new Date ( timer.getTime() - aux.getTime() )

      this.hou = timer.getUTCHours()
      this.min = timer.getUTCMinutes()
      this.sec = timer.getUTCSeconds()
  
    }, 333);

    setTimeout(() =>{

      clearInterval(my_var);
      console.log("- Timer: Time's up!");

      this.hou = 0;
      this.min = 0;
      this.sec = 0;
      this.disable = false;
      
    }, (h * 3600 + m * 60 + s) * 1000);

  }


  houUpHandler(): void {
    if (this.hou < 59)
      this.hou = this.hou + 1;
    else
      this.hou = 0;
  }
  houDownHandler(): void {
    if (this.hou > 0)
      this.hou = this.hou - 1;
    else
      this.hou = 59
  }  

  minUpHandler(): void {
    if (this.min < 59)
      this.min = this.min + 1;
    else
      this.min = 0;
  }
  minDownHandler(): void {
    if (this.min > 0)
      this.min = this.min - 1;
    else
      this.min = 59
  }  
  
  secUpHandler(): void {
    if (this.sec < 59)
      this.sec = this.sec + 1;
    else
      this.sec = 0;
  }
  secDownHandler(): void {
    if (this.sec > 0)
      this.sec = this.sec - 1;
    else
      this.sec = 59
  }


  now(): Date {
    let now = new Date()
    return now
  }
}
