import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.sass']
})
export class TimeComponent implements OnInit {
    _stateWidget = 0
    eye = true
  
    constructor(
      private router: Router,
    ){}
    ngOnInit(): void {
      this.router.navigate([ this._where(this._stateWidget) ])
    }
  
  
  
    _where(state: number): string {
      switch ( state ) {
        case 1:
          return '/time/stopwatch'
          break;
        case 2:
          return '/time/timer'
          break;
        case 3:
          return '/time/timer-container'
          break;          
  
        default: 
          return '/time/clock'
          break;
      }    
    }
  
    close(): void {
      this.eye = false
    }
    open(): void {
      this.eye = true
    }
  
    arrowL(): void {
      if(this._stateWidget > 0)
        this._stateWidget--
      else
        this._stateWidget = 3
  
      this.router.navigate([ this._where(this._stateWidget) ])
    }
  
    arrowR(): void {
      if(this._stateWidget < 3)
        this._stateWidget++
      else
        this._stateWidget = 0
  
      this.router.navigate([ this._where(this._stateWidget) ])
    }
  }