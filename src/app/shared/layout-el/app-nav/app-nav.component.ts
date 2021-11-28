import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.sass']
})
export class AppNavComponent implements OnInit {
  hoverEvent = false;

  constructor() { }

  ngOnInit(): void {
  }

  showNavMenu(){
    this.hoverEvent = true;
  }
  hideNavMenu(){
    this.hoverEvent = false;
  }
}
