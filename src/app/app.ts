import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'teacher-student-app';
  constructor(public router: Router) {}

  shouldShowNavbar(): boolean {
    return !['', '/'].includes(this.router.url);
  }
}
