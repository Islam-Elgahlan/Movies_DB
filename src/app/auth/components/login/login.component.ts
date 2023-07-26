import { Component } from '@angular/core';
import {FormGroup,Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
// import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  signInForm!: FormGroup;
  titleAlert: string = 'This field is required';
  // getError: any;

  constructor(
    private _AuthService:AuthService ,
    private _FormBuilder:FormBuilder ,
    private _Router:Router ,
    ) {}

    ngOnInit() {
      this.createForm();
    }

    createForm(){
      this.signInForm = this._FormBuilder.group({
       email:['' ,[Validators.required, Validators.email]],
       password:['', [Validators.required , Validators.minLength(3)]]
      });
   }

   login(){
    // this._NgxSpinnerService.show();

    this._AuthService.login(this.signInForm.value).subscribe((data)=>{
      localStorage.setItem("token" , data.token)

      this._Router.navigate(['/home'])
      // this._NgxSpinnerService.hide()
    }, error => {
      // this._NgxSpinnerService.show();
      // this._NgxSpinnerService.hide()
    })
    console.log(this.signInForm.value)
  }



  getErrorMessage() {
    if (this.f['email'].hasError('required')) {
      return 'You must enter a value';
    }
    return this.f['email'].hasError('email') ? 'Not a valid email' : '';
  }
  getPasswordErrorMsg() {
    if (this.f['password'].hasError('required')){
      return 'You must enter a value';
    }
    return this.f['password'].hasError('minlength') ? 'Password must be at least 3 characters' : '';
  }
  // convenience getter for easy access to form fields
  get f(): { [key: string]: AbstractControl; } {
    return this.signInForm.controls;
}
}
