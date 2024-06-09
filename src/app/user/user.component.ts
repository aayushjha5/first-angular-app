import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

/* managing state using angular change detection mechanism */
/* export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath(){
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser(){
    const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
} */

/* managing state using signals */

export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
//using computed arrow function for getting imagepath in case of signal
//angular auto analyze and setup an subscription to this location and when signal is received
//only then angular checks for this location. so efficiency is increased
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  /*get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  } */

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}


