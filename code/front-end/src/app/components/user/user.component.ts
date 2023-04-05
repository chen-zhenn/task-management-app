import { Component, Input, OnInit } from '@angular/core';
import { Iuser } from 'src/app/interfaces';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {

  @Input() user!:Iuser;

  constructor(private usersService: UsersService) {}

}
