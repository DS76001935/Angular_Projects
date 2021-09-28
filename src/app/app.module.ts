import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EditComponent } from './edit/edit.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { SaveApiComponent } from './save-api/save-api.component';
import { LoginApiComponent } from './login-api/login-api.component';
import { HomeApiComponent } from './home-api/home-api.component';
import { UpdateApiComponent } from './update-api/update-api.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LogoutApiComponent } from './logout-api/logout-api.component';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    SignupComponent,
    RegisterComponent,
    HomeComponent,
    EditComponent,
    SaveApiComponent,
    LoginApiComponent,
    HomeApiComponent,
    UpdateApiComponent,
    AdminHomeComponent,
    LogoutApiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }