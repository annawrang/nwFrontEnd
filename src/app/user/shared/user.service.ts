import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';

interface UserResponse{
  userName: String;
  firstName: String;
  surName: String;
  password: String;
  email: String;
}

@Injectable()
export class UserService {
  readonly rootUrl = 'http://127.0.0.1:8080/users'
  readonly rootUrlCreate = 'http://127.0.0.1:8080/users/create'
  loggedIn : boolean = false;

  constructor(private http: HttpClient) { }

  registerUser(user: User){
    const body: User = {
      userName : user.userName,
      password : user.password,
      firstName : user.firstName,
      surName : user.surName,
      email : user.email
    }
    return this.http.post(this.rootUrlCreate, body).subscribe(res => console.log(res));
  }

  userAuthentication(userName, password){
    var data = "?userName=" + userName + "&password=" + password;
    return this.http.get(this.rootUrl + data);
  }

}
