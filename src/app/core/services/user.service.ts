import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl:string=environment.apiUrl
  http=inject(HttpClient)
  constructor() { }
  userLogin(email:string,password:string){
    this.http.post(this.apiUrl+'login',{email:email,password:password})
  }
  userSignUp(obj:object){
    this.http.post(this.apiUrl+'signUp',obj)
  }
}
