import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Timestamp} from 'rxjs';
import { UserMinimumInterface } from '../user-minimum.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProfileService {
  readonly rootUrl = 'http://127.0.0.1:8080/profile'
  private _headersToken = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', sessionStorage.getItem('jwtToken'))

  constructor(private http: HttpClient) { }

  getProfile(userNumber: string): Observable<any>{
    var data = '/' + userNumber
    return this.http.get(this.rootUrl + data, {headers: this._headersToken});
  }


  editDescription(newDescription: string, profile): Observable<any>{

    profile.desciption = newDescription
    var newDescriptionData = this.rootUrl + '/' + profile.user.userNumber
    return this.http.put(this.rootUrl + newDescriptionData, newDescription,{headers: this._headersToken, observe: 'response'});
  }



  
}
