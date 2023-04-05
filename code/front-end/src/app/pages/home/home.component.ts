import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  breakpoint:number = 990
  visible:boolean = innerWidth >= this.breakpoint

  visibilityHandler(visible:boolean){
    this.visible = visible
  }
}
