import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) { }

  login() {
    if (this.username === 'admin' && this.password === '1234h') {
      this.router.navigate(['/todos']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
