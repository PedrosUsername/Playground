import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.sass']
})
export class StopwatchComponent implements OnInit {

  min = this._min;
  sec = this._sec;

  ngOnInit(){
    this.min = 0;
    this.sec = 0;
  }

  constructor() {
    setInterval( () => {
      this.min = this._min;
      this.sec = this._sec;
    }, 1000 );
  }

  get _min(): number {
    if (this.sec >= 59){
      return this.min + 1;
    }
    return this.min;
  }
  get _sec(): number {
    if (this.sec >= 59){
      return 0;
    }    
    return this.sec + 1;
  }
}
