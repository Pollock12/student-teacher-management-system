import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Welcome } from './welcome/welcome';
import { Home } from './home/home';
import { TeacherSection } from './teacher-section/teacher-section';
import { Navbar } from './navbar/navbar';
import { StudentSection } from './student-section/student-section';
import { TeacherForm } from './teacher-form/teacher-form';
import { HttpClientModule } from '@angular/common/http';
import { StudentForm } from './student-form/student-form';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    App,
    Welcome,
    Home,
    TeacherSection,
    Navbar,
    StudentSection,
    TeacherForm,
    StudentForm,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain:'dev-ozuffur8szzvnkff.us.auth0.com',
      clientId:'OpBKH6bFtw1Qb87TDrHvrN9RMBKhpgTA',
      authorizationParams:{
        redirect_uri:window.location.origin
      }
    })
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
