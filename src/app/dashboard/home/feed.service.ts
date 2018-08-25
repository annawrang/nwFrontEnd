import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Post } from './post.model';
import { Observable, Timestamp} from 'rxjs';
import { UserMinimumInterface } from '../user-minimum.model';
import { MiniUserFeed } from '../user-minimum.model';

import { IPostComplete } from './post.model';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class FeedService {
  readonly postUrl = 'http://127.0.0.1:8080/posts'
  readonly userUrl = 'http://127.0.0.1:8080/profile'
  private page = 1
  private userNumber = sessionStorage.getItem('userNumber')
  private _headersToken = new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Authorization', sessionStorage.getItem('jwtToken'))
                                        

  constructor(private http: HttpClient) { }

  getMiniUser(): Observable<MiniUserFeed>{
    var data = '/' + this.userNumber
    return this.http.get<MiniUserFeed>(this.userUrl + data, {headers: this._headersToken})
  }

  createNewPost(post: Post): Observable<any>{
    return this.http.post(this.postUrl, post, {observe: "response", headers: this._headersToken});
  }

  editPost(postNumber: string, newText: string): Observable<any>{
    var data = '/' + postNumber
    return this.http.put(this.postUrl + data, newText,{headers: this._headersToken, observe: 'response'});
  }

  deletePost(postNumber: string): Observable<any>{
    var data = '/' + postNumber
    return this.http.delete(this.postUrl + data, {headers: this._headersToken, observe: 'response'});
  }

  getPostFeed(): Observable<IPostComplete>{
    var data = '?page=' + this.page;
    return this.http.get<IPostComplete>(this.postUrl + data, {headers: this._headersToken});
  }

  nextPage(){
    this.page += 1;
  }

  newLike(postNumber: string): Observable<any>{
    var likeData = '/' + postNumber + '/likes'
    return this.http.post(this.postUrl + likeData, null,{headers: this._headersToken, observe: 'response'});
  }

  replyToComment(postNumber: string, commentNumber: string, newReply: string): Observable<any>{
    var commentReplyData = '/' + postNumber + '/comments/' + commentNumber + '/reply'
    return this.http.post(this.postUrl + commentReplyData, newReply,{headers: this._headersToken, observe: 'response'});
  }

  likeComment(postNumber: string, commentNumber: string){
    var likeCommentData = '/' + postNumber + '/comments/' + commentNumber + '/likes'
    return this.http.post(this.postUrl + likeCommentData,null, {headers: this._headersToken, observe: 'response'});
  }

  commentPost(postNumber: string, newComment: string){
    var newCommentData = '/' + postNumber + '/comments'
    return this.http.post(this.postUrl + newCommentData, newComment,{headers: this._headersToken, observe: 'response'});
  }

}

