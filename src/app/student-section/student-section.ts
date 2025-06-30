import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-section',
  standalone: false,
  templateUrl: './student-section.html',
  styleUrl: './student-section.css'
})
export class StudentSection {
  constructor(private router: Router) { }

  goTo(action: string) {
    this.router.navigate(['/student-form', action]);
  }
}
