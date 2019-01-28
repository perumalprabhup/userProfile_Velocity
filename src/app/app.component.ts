import { Component } from '@angular/core';
import { UserProfileService } from './user-profile.service'
import { People } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //Imitilization
  public people = [];
  selectedUser: People;
  searchName: string;

  constructor(private _userProfileService: UserProfileService) { }
// it is used the get the services at the time of DOM loading 
  ngOnInit() {
    this._userProfileService.getUsers()
      .subscribe(data => this.people = data);
  };
// onClick to be called 
  onSelect(user: People): void {
    this.selectedUser = user;
    console.log(user);
  }
}
