import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotpasswordForm : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user : UserService) { }

  ngOnInit() {
    this.forgotpasswordForm =  this.formBuilder.group({
      emailid: ['', [Validators.required, Validators.email]]
    })
  }
    get f() { return this.forgotpasswordForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.forgotpasswordForm.invalid) {
        return;
    }
    else{
      console.log("Successful", this.forgotpasswordForm.value);
      let reqData={
        Email: this.forgotpasswordForm.value.emailid
      }
      this.user.forgot(reqData).subscribe((response:any)=> {
        console.log(response);
      })
    }
  }
}
