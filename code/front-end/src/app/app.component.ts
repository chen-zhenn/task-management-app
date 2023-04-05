import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  tasks = [{
    id: 1,
    category: 1,
    title: 'Iniciar estudos do Angular Framework',
    done: true
  },{
    id: 2,
    category: 2,
    title: 'Fazer um Todo App com Angular Framework',
    done: true
  }]
}
