import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Post } from './post.model';
import { Observable, Timestamp} from 'rxjs';
import { UserMinimumInterface } from '../user-minimum.model';
import { timestamp } from 'rxjs/operator/timestamp';
import { IPostComplete } from './post.model';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class FeedService {
  readonly rootUrl = 'http://127.0.0.1:8080/posts'
  private page = 1
  private _headersToken = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', sessionStorage.getItem('jwtToken'))

  constructor(private http: HttpClient) { }

  createNewPost(post: Post): Observable<any>{
    return this.http.post(this.rootUrl, post, {observe: "response", headers: this._headersToken});
  }

  editPost(){}

  deletePost(){}

  getPostFeed(): Observable<IPostComplete>{
    var data = '?page=' + this.page;
    return this.http.get<IPostComplete>(this.rootUrl + data, {headers: this._headersToken});
  }

  nextPage(){
    this.page += 1;
    this.getPostFeed();
  }

  newLike(postNumber: string): Observable<any>{
    var likeData = '/' + postNumber + '/likes'
    console.log("anropar " + this.rootUrl + likeData)
    return this.http.post(this.rootUrl + likeData, null,{headers: this._headersToken, observe: 'response'});
  }

}

