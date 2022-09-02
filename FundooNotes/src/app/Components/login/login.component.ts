import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user : UserService, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

    onSubmit() {
      this.submitted = true;

      if (this.loginForm.invalid) {
        console.log("Login Unsuccessfull");
      }
      else{
        console.log("Login Successfully Completed");
        let reqData={
          Email:this.loginForm.value.username,
          Password:this.loginForm.value.password
        }
        this.user.login(reqData).subscribe((response:any)=> {
          console.log(response);  
          localStorage.setItem("token",response.data);
          this.router.navigateByUrl('/dashboard/notes');
        })
      }
    }
  }
