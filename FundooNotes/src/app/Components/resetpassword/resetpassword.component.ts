import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetForm : FormGroup;
  submitted = false;
  token : any;

  constructor(private formBuilder: FormBuilder, private user : UserService, private activeRoute : ActivatedRoute) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  })
  this.token = this.activeRoute.snapshot.paramMap.get('token');
  console.log(this.token);
}
get f() { return this.resetForm.controls; }

onSubmit() {
  this.submitted = true;

  if(this.resetForm.invalid){
    return;
  }
  else{
    console.log("Password reset successful", this.resetForm.value);
    let reqData = {
      password : this.resetForm.value.password,
      confirmPassword : this.resetForm.value.confirmPassword
    }
    this.user.reset(reqData, this.token).subscribe((response:any)=> {
      console.log(response);
    })
  }
}
}