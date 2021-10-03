import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-container',
  templateUrl: './timer-container.component.html',
  styleUrls: ['./timer-container.component.sass']
})
export class TimerContainerComponent implements OnInit {

  hou!: number;
  min!: number;
  sec!: number;

  disable!: boolean;

  ngOnInit(){
    this.min = 0;
    this.sec = 0;
    this.hou = 0;
    this.disable = false;
  }


  run(): void {
    this.disable = true;

    let h = this.hou;
    let m = this.min;
    let s = this.sec;
    let my_var = setInterval(() => {

      if (this.sec > 0)
        this.sec = this.sec - 1;
      else{
        this.sec = 59;
        if (this.min > 0)
          this.min = this.min - 1;
        else{
          this.min = 59;
          this.hou = this.hou - 1;
        }
      }
  
    }, 900);

    setTimeout(() =>{

      clearInterval(my_var);
      console.log("- Timer: Time's up!");

      this.hou = 0;
      this.min = 0;
      this.sec = 0;
      this.disable = false;
      
    }, (h * 3600 + m * 60 + s + 1) * 1000);

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

}
