import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-section',
  standalone: false,
  templateUrl: './teacher-section.html',
  styleUrl: './teacher-section.css'
})
export class TeacherSection {
    constructor(private router:Router){}

    goTo(action : string)
    {
      this.router.navigate(['/teacher-form',action]);
    }
}
