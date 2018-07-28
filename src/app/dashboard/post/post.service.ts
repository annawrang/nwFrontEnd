import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Post } from '../home/post.model';
import { Observable, Timestamp} from 'rxjs';
import { UserMinimumInterface } from '../user-minimum.model';
import { timestamp } from 'rxjs/operator/timestamp';
import { IPostComplete } from '../home/post.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class PostService {
  readonly rootUrl = 'http://127.0.0.1:8080/posts'
  private _headersToken = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', sessionStorage.getItem('jwtToken'))

  constructor(private http: HttpClient) { }

  getPost(postNumber: string): Observable<IPostComplete>{
    var data = '/' + postNumber
    console.log(this.rootUrl + data)
    return this.http.get<IPostComplete>(this.rootUrl + data, {headers: this._headersToken});
  }

  newLike(postNumber: string): Observable<any>{
    var likeData = '/' + postNumber + '/likes'
    console.log("anropar " + this.rootUrl + likeData)
    return this.http.post(this.rootUrl + likeData, null,{headers: this._headersToken, observe: 'response'});
  }

  commentPost(postNumber: string, newComment: string){
    var newCommentData = '/' + postNumber + '/comments'
    return this.http.post(this.rootUrl + newCommentData, newComment,{headers: this._headersToken, observe: 'response'});
  }

  editPost(postNumber: string, newText: string): Observable<any>{
    var data = '/' + postNumber
    return this.http.put(this.rootUrl + data, newText,{headers: this._headersToken, observe: 'response'});
  }

  deletePost(postNumber: string): Observable<any>{
    var data = '/' + postNumber
    return this.http.delete(this.rootUrl + data, {headers: this._headersToken, observe: 'response'});
  }
}
