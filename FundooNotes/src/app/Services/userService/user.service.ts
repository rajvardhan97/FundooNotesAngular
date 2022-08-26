import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token : any;

  constructor(private httpService : HttpService) {
    this.token = localStorage.getItem('token')
   }

  Registration(reqdata:any){
    console.log(reqdata);
    
    let header = {
      headers:new HttpHeaders({
      'Content-type':'application/json'
      })
      }
      return this.httpService.postService("/User/Register",reqdata,false,header)
  }

  login(reqdata:any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpService.postService("/User/Login",reqdata,false,header)
  }

  forgot(reqdata:any){
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpService.postService('/User/ForgotPassword?Email='+reqdata.Email,{},false,header)
}

reset(reqdata: any, token: any){
  console.log(reqdata);

  let header = {
    headers:new HttpHeaders({
      'Content-type':'application/json',
      'Authorization': 'Bearer '+ token
    })
  }
  return this.httpService.postService('/User/ResetLink?password='+reqdata.password+'&confirmPassword='+reqdata.confirmPassword,{},true,header)
}
}
