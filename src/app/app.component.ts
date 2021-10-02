import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  state_widget = 0


  constructor(
    private router: Router
  ){}


  _where(state: number): string {
    switch ( state ) {
      case 1:
        return '/stopwatch'
        break;
      case 2:
        return '/timer'
        break;
      case 3:
        return '/timer-container'
        break;          

      default: 
        return '/clock'
        break;
    }    
  }

  arrowL(): void {
    if(this.state_widget > 0)
      this.state_widget--
    else
      this.state_widget = 3

    this.router.navigate([ this._where(this.state_widget) ])
  }

  arrowR(): void {
    if(this.state_widget < 3)
      this.state_widget++
    else
      this.state_widget = 0

    this.router.navigate([ this._where(this.state_widget) ])
  }
}