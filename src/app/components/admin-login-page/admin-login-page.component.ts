import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.css']
})
export class AdminLoginPageComponent {

  constructor(private authService: AuthService){}

  login(login: string, password: string) {
    this.authService.login(login, password).subscribe(
      data => {
        localStorage.setItem('token', data.token);
      }
    )
  }
}
