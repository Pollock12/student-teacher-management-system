import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  constructor(
    public _auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this._auth.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['']);
      }
    });
  }

  go(path: string) {
    this.router.navigate([`/${path}`]);
  }

  logout(): void {
    this._auth.logout({
      logoutParams: {
        returnTo: window.location.origin
      }
    });
  }

}
