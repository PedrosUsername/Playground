import { Component, OnInit } from '@angular/core';
import { NgxCowsayService } from 'ngx-cowsay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'playground'

  constructor(
    private cowsay: NgxCowsayService
  ){}
  ngOnInit(): void {
    //this.router.navigate([ this._where(this._stateWidget) ])
    this.cowsay.log("hehehe", "", "a", false)
  }

}