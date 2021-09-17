import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.sass']
})
export class ClockComponent {

  hou = this._hou;
  min = this._min;
  sec = this._sec;

  constructor() {
    setInterval( () => {
      this.min = this._min;
      this.sec = this._sec;
      this.hou = this._hou;
    }, 500 );
  }

  get _hou(): number {
    let date = new Date()
    return date.getHours();
  }
  get _min(): number {
    let date = new Date()
    return date.getMinutes();
  }
  get _sec(): number {
    let date = new Date()
    return date.getSeconds();
  }
}