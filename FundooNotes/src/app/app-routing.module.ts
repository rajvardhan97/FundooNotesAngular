import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterationComponent } from './Components/registeration/registeration.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetAllNoteComponent } from './Components/get-all-note/get-all-note.component';
import { TrashComponent } from './Components/trash/trash.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import {  AuthguardGuard } from './authguard.guard';

const routes: Routes = [
  {path: 'registration', component:RegisterationComponent},
  {path: 'login',component:LoginComponent},
  {path:'', redirectTo:"/login", pathMatch:'full'},
  {path: 'forgotpassword',component:ForgotpasswordComponent},
  {path: 'resetpassword/:token',component:ResetpasswordComponent},
  {path: 'dashboard', component:DashboardComponent,
  canActivate : [ AuthguardGuard],
children:[
  {path: '', redirectTo:"/dashboard/notes", pathMatch:'full'},
  {path:'notes', component:GetAllNoteComponent},
  {path:'trash', component:TrashComponent},
  {path:'archive', component:ArchiveComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
