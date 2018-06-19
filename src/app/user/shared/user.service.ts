import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';

interface UserResponse{
  firstName: String;
  surName: String;
  password: String;
  email: String;
}

@Injectable()
export class UserService {
  readonly rootUrl = 'http://127.0.0.1:8080/users'
  readonly rootUrlAuthenticate = 'http://127.0.0.1:8080/users/authenticate'
  loggedIn : boolean = false;

  constructor(private http: HttpClient) { }

  registerUser(user: User){
    const body: User = {
      firstName : user.firstName,
      surName : user.surName,
      password : user.password,
      email : user.email
    }
    return this.http.post(this.rootUrl, body, {withCredentials: true}).subscribe();
  }

  userAuthentication(email, password): Observable<any>{
    var data = "?email=" + email + "&password=" + password;
    return this.http.post(this.rootUrlAuthenticate + data, null, {withCredentials:true, observe: 'response'});
  }

}
