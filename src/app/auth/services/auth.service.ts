import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }
  login(loginValues:any):Observable<any>{
    return this._HttpClient.post('https://book-store-eato.onrender.com/signIn' , loginValues)
  }
  register(registerValues:any):Observable<any>{
    return this._HttpClient.post('https://book-store-eato.onrender.com/signUp' , registerValues)
  }
}
