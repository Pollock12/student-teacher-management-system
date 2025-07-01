import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: false,
  templateUrl: './welcome.html',
  styleUrl: './welcome.css'
})
export class Welcome {
  user = { email: '', password: '' }; // Login
  newUser = { fullname: '', email: '', password: '', confirm_password: '' }; // Sign in

  showLoginForm = false;
  showSigninForm = false;

  constructor(private router: Router) { }

  signin() {
    const { fullname, email, password, confirm_password } = this.newUser;
    if (!fullname || !email || !password || !confirm_password) {
      alert("All fields are requred!");
      return;
    }
    if (password != confirm_password) {
      alert("Password don't match!");
      return;
    }

    localStorage.setItem('registered', JSON.stringify({email, password }));

    alert("Sign Up Successful");
    this.newUser = { fullname: '', email: '', password: '', confirm_password: '' };
    this.showSigninForm=false;
  }

  login() {
    const savedUser = JSON.parse(localStorage.getItem('registered') || '{}');
    if (this.user.email === savedUser.email && this.user.password === savedUser.password) {
      alert('Login successful');
      localStorage.setItem('token', 'demo-token');
      this.router.navigate(['/home']);
    } else {
      alert('Invalid username or password');
    }
  }

  cancel() {
    this.showLoginForm = false;
    this.showSigninForm = false;
    this.user = { email: '', password: '' };
    this.newUser = { fullname: '', email: '', password: '', confirm_password: '' };
  }
}
