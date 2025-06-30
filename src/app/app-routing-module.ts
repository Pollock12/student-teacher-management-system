import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Home } from './home/home';
import { TeacherSection } from './teacher-section/teacher-section';
import { StudentSection } from './student-section/student-section';
import { TeacherForm } from './teacher-form/teacher-form';
import { StudentForm } from './student-form/student-form';

const routes: Routes = [
  {path : '',component : Welcome},
  {path : 'home',component : Home},
  { path: 'teacher', component: TeacherSection }, 
  {path : 'student', component: StudentSection},
  {path : 'teacher-form/:action', component: TeacherForm},
  {path : 'student-form/:action', component: StudentForm},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
