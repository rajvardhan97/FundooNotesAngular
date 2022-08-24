import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {
  registerForm : FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder, private user : UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
     });
    }
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.registerForm.valid) {
            //return;
          console.log(this.registerForm.value)
            let reqData={
              FirstName:this.registerForm.value.firstName,
              LastName:this.registerForm.value.lastName,
              Email:this.registerForm.value.email,
              Password:this.registerForm.value.password
            }
            this.user.Registration(reqData).subscribe((response:any)=> {
            console.log(response);
            });
        }
      }
}