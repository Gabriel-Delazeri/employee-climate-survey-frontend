import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AuthenticationRequestDto } from 'src/app/types/AuthenticationRequestDto';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  authenticationData : AuthenticationRequestDto = {
    username: '',
    password: ''
  }

  constructor(private authService: AuthService){}

  onSubmit() : void {
    this.authService.login(this.authenticationData).subscribe(
      (authenticationResponse) => {
        localStorage.setItem('token', authenticationResponse.token);
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
