import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})




export class UserComponent {
  //adding INput decortator to properties
  //this will make the property settable from outside
  //we are setting avatar from app.component.html 
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
  }
}


