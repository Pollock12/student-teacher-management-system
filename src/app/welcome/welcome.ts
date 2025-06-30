import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl: './welcome.html',
  styleUrl: './welcome.css'
})
export class Welcome {
   user = { username: '', password: '' };
  showLoginForm = false;

  constructor(private router: Router) {}

  login() {
    if (this.user.username === 'admin' && this.user.password === '1234') {
      alert('Login successful');
      localStorage.setItem('token', 'demo-token');
      this.router.navigate(['/home']);
    } else {
      alert('Invalid username or password');
    }
  }

  cancel() {
    this.showLoginForm = false;
    this.user = { username: '', password: '' };
  }
}
