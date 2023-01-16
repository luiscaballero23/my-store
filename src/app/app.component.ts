import { Component } from '@angular/core';

import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-store';
  imgParent = '';
  showImg = true;
  token = '';

  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) {}

  onLoaded(img: string) {
    console.log('log padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

  createUser() {
    this.usersService
      .create({
        name: 'Luis',
        email: 'luis@mail.com',
        password: 'luis',
      })
      .subscribe((rta) => {
        console.log(rta);
      });
  }

  login() {
    this.authService.login('luis@mail.com', 'luis').subscribe((rta) => {
      console.log(rta.access_token);
    });
  }
}
