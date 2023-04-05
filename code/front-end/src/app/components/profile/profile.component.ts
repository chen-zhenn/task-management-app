import { Component, OnInit } from '@angular/core';
import { faRightFromBracket, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { Iuser } from 'src/app/interfaces';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent implements OnInit {
  icons = {
    theme: faCircleHalfStroke,
    logout: faRightFromBracket,
  };
  
  user!:Iuser;
  visible: boolean = false;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.
      getData().subscribe(data => this.user = data);
    
  }
}
