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

  get _hou(): string {
    let date = new Date()
    return date.getHours().toString();
  }
  get _min(): string {
    let date = new Date()
    return date.getMinutes().toString();
  }
  get _sec(): string {
    let date = new Date()
    return date.getSeconds().toString();
  }
}