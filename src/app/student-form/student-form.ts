import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-teacher-form',
  standalone: false,
  templateUrl: './student-form.html',
  styleUrl: './student-form.css'
})


export class StudentForm implements OnInit {
  action: string = '';

  student = {
    id : 0,
    roll: '',
    student_name: '',
    student_mail: '',
    department: '',
    mobile_no: ''
  };

  studentList: any[] = [];
  editIndex: number | null = null;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.action = params.get('action') || '';
      this.loadStudents();
    });
  }

  loadStudents() {
    const storedData = localStorage.getItem('students');
    this.studentList = storedData ? JSON.parse(storedData) : [];
  }

  saveStudents() {
    localStorage.setItem('students', JSON.stringify(this.studentList));
  }

 onSubmit() {
    const { roll, student_name, student_mail, department, mobile_no } = this.student;

    if (!roll || !student_name || !student_mail || !department || !mobile_no) {
      alert("Please fill in all fields before submitting!");
      return;
    }

    if (this.action === 'create') {
      // New ID assign
      this.student.id = Date.now(); // unique id
      this.studentList.push({ ...this.student });
      this.saveStudents();
      alert('Student Created Successfully!');
    }
    else if (this.action === 'update' && this.editIndex !== null) {
      this.studentList[this.editIndex] = { ...this.student };
      this.saveStudents();
      alert('Updated!');
    }

    // Reset form
    this.student = {
      id: 0,
      roll: '',
      student_name: '',
      student_mail: '',
      department: '',
      mobile_no: ''
    };
    this.editIndex = null;
  }

  editStudent(index: number) {
    this.editIndex = index;
    this.student = { ...this.studentList[index] };
    this.action = 'update';
  }

  deleteStudent(id: number) {
    const confirmDelete = confirm("Are you sure to delete?");
    if (confirmDelete) {
      this.studentList = this.studentList.filter(s => s.id !== id);
      this.saveStudents();
      alert('Deleted!');
    }
  }
}