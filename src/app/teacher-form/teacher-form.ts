import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-teacher-form',
  standalone: false,
  templateUrl: './teacher-form.html',
  styleUrl: './teacher-form.css'
})
export class TeacherForm implements OnInit {
  action: string = '';

  teacher = {
    id: '',
    name: '',
    email: '',
    subject: ''
  };

  teacherList: any[] = [];
  editIndex: number | null = null;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.action = params.get('action') || '';
      this.loadTeachers();
    });
  }


  loadTeachers() {
    const storedData = localStorage.getItem('teachers');
    this.teacherList = storedData ? JSON.parse(storedData) : [];
  }

  saveTeachers() {
    localStorage.setItem('teachers', JSON.stringify(this.teacherList));
  }

  onSubmit() {
    const { id, name, email, subject } = this.teacher;

    if (!id || !name || !email || !subject) {
      alert("Please fill in all fields before submitting!");
      return;
    }

    if (this.action === 'create') {
      // Check duplicate ID
      const exists = this.teacherList.find(t => t.id === id);
      if (exists) {
        alert("Teacher ID already exists!");
        return;
      }

      this.teacherList.push({ ...this.teacher });
      this.saveTeachers();
      alert('Teacher Created Successfully!');
      this.loadTeachers();
    } else if (this.action === 'update' && this.editIndex !== null) {
      this.teacherList[this.editIndex] = { ...this.teacher };
      this.saveTeachers();
      alert('Updated!');
      this.loadTeachers();
    }

    // Reset form
    this.teacher = { id: '', name: '', email: '', subject: '' };
    this.editIndex = null;
  }


  editTeacher(index: number) {
    this.editIndex = index;
    this.teacher = { ...this.teacherList[index] };
    this.action = 'update';
    this.loadTeachers();
  }

  deleteTeacher(id: string) {
    const confirmDelete = confirm('Are you sure to delete?');
    if (confirmDelete) {
      this.teacherList = this.teacherList.filter(t => t.id !== id);
      this.saveTeachers();
      alert('Deleted!');
      this.loadTeachers();

    }
  }

}