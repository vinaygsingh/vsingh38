import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  Url:string = 'http://localhost:3000/users';
  
  getUsers(){
  return this.http.get<User[]>(this.Url);
  }
}