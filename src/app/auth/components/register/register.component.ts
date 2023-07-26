import { Component } from '@angular/core';
import {FormGroup,Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  signUpForm!: FormGroup;
  titleAlert: string = 'This field is required';
  getError: any;

  constructor(
    private _AuthService:AuthService ,
    private _FormBuilder:FormBuilder ,
    private _Router:Router ,
    ) {}

    ngOnInit() {
      this.createForm();
    }

    createForm(){
      this.signUpForm = this._FormBuilder.group({
       name:['' ,[Validators.required, Validators.minLength(3)]],
       email:['' ,[Validators.required, Validators.email]],
       password:['', [Validators.required , Validators.minLength(3)]],
       cpassword:['', [Validators.required , Validators.minLength(3)]],
       avatar:['', [Validators.required ]],
      //  role:['user' ]
      });
   }
   selectImage(event:any){
    //  let img =  this.f['avatar'].value ;
    //  img = event.target.files[0];
     this.signUpForm.get('avatar')?.setValue(event.target.files[0])
     console.log(event)

     }
   register(){
    // this._NgxSpinnerService.show();
    let values = this.prepareFormData()
    this._AuthService.register(values).subscribe((data)=>{

      this._Router.navigate(['/login'])
      // this._NgxSpinnerService.hide()
    }, error => {
      // this._NgxSpinnerService.show();
      // this._NgxSpinnerService.hide()
    })
    console.log(this.signUpForm.value)
  }

  prepareFormData(){
    let formData = new FormData()
    Object.entries(this.signUpForm.value).forEach(([key,value]:any) => {
      formData.append(key,value)
    })
    return formData ;
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
    return this.signUpForm.controls;
}
}
