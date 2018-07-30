import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Network, INetwork } from './network.model';
import { Observable } from '../../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  readonly rootUrl = 'http://127.0.0.1:8080/networks'
  private page = 1
  private _headersToken = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', sessionStorage.getItem('jwtToken'))
  constructor(private http: HttpClient) { }

  createNewPost(network: Network): Observable<any>{
    return this.http.post(this.rootUrl, network, {observe: "response", headers: this._headersToken});
  }
 
  getNetworks(): Observable<INetwork>{
    return this.http.get<INetwork>(this.rootUrl, {headers: this._headersToken});
  }
}