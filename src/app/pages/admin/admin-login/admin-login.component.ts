import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private authService: AuthService, private router: Router){}

  onSubmit() : void {
    this.authService.login(this.authenticationData).subscribe(
      (authenticationResponse) => {
        localStorage.setItem('token', authenticationResponse.token);
        this.router.navigate(['/admin/dashboard']);
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
