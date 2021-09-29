import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EditComponent } from './edit/edit.component';
import { HomeApiComponent } from './home-api/home-api.component';
import { LoginApiComponent } from './login-api/login-api.component';
import { LogoutApiComponent } from './logout-api/logout-api.component';
import { RegisterComponent } from './register/register.component';
import { SaveApiComponent } from './save-api/save-api.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateApiComponent } from './update-api/update-api.component';
import { ViewApiComponent } from './view-api/view-api.component';

const routes: Routes = [
  {path:"login", component:LoginApiComponent},
  {path:"add", component:SignupComponent},
  {path:"register",component:RegisterComponent},
  {path:"home",component:HomeApiComponent},
  {path:"editUser/:userId",component:EditComponent},
  {path:"signup",component:SaveApiComponent},
  {path:"admin",component:AdminHomeComponent},
  {path:"logout",component:LogoutApiComponent},
  {path:"updateUser/:userId",component:UpdateApiComponent},
  {path:"view/:userId",component:ViewApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
