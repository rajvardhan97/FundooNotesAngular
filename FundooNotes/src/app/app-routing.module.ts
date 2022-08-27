import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterationComponent } from './Components/registeration/registeration.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetAllNoteComponent } from './Components/get-all-note/get-all-note.component';

const routes: Routes = [
  {path: 'registration', component:RegisterationComponent},
  {path: 'login',component:LoginComponent},
  {path: 'forgotpassword',component:ForgotpasswordComponent},
  {path: 'resetpassword/:token',component:ResetpasswordComponent},
  {path: 'dashboard', component:DashboardComponent,
children:[
  {path: '', redirectTo:"/dashboard/notes", pathMatch:'full'},
  {path:'notes', component:GetAllNoteComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
