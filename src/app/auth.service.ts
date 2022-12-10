import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  , BehaviorSubject   } from 'rxjs';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient ) { 
    if (localStorage.getItem('token')!=null) {
      this.getUserData()
    }
  }

  BASE_URL:string = 'https://route-egypt-api.herokuapp.com/'

regester(data:any):Observable<any>
{
  return this._HttpClient.post(`${this.BASE_URL}signup`,data)
}

login(data:any):Observable<any>
{
  return this._HttpClient.post(`${this.BASE_URL}signin`,data)
}

userData = new BehaviorSubject(null)

userName!:string
getUserData(){
  let token:string = JSON.stringify(localStorage.getItem('token'))
  let data:any = jwt_decode<any>(token)
  this.userData.next(data)
  this.userName=data.first_name
  return data._id;
  
}



logOut(){
  this.userData.next(null)
  localStorage.removeItem('token');
}

}
