import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  @Output() visibility = new EventEmitter<boolean>();
  visible: boolean = false;

  toggle() {
    this.visible = !this.visible
    this.visibility.emit(this.visible);
  }
}