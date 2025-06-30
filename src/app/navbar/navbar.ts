import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'] 
})
export class Navbar {
  constructor(private router: Router) { }

  go(path: string) {
    this.router.navigate([`/${path}`]);
  }

  logout() {
    // logout logic here
    this.router.navigate(['']);
  }
}
