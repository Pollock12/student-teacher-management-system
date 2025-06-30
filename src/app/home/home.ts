import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-home',
    standalone: false,
    templateUrl: './home.html',
    styleUrl: './home.css'
})
export class Home {
    section: 'home' | 'teacher' | 'student' = 'home';

    constructor(private router: Router) { }

    goToTeacher(action: string) {
        this.router.navigate(['/teachers', action]);
    }

    home() {
        this.section = 'home';
    }
    teacher() {
        this.section = 'teacher';
    }
    student() {
        this.section = 'student';
    }
    logout() {
        this.router.navigate(['']);
    }

}
