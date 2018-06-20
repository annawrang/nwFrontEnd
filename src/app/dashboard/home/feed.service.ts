import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Post } from './post.model';
import { Observable, Timestamp} from 'rxjs';
import { UserMinimumInterface } from '../user-minimum.model';
import { timestamp } from 'rxjs/operator/timestamp';
import { IPostComplete } from './post.model';


@Injectable()
export class FeedService {
  readonly rootUrl = 'http://127.0.0.1:8080/posts'
  private page = 1

  constructor(private http: HttpClient) { }

  createNewPost(post: Post): Observable<any>{
    var data = "?userNumber=396d0b5c-6291-4fc1-9e7d-5c61ce7fb328"
    return this.http.post(this.rootUrl + data, post, {observe: "response"});
  }

  editPost(){}

  deletePost(){}

  getPostFeed(): Observable<IPostComplete>{
    var data = '?page=' + this.page;
    return this.http.get<IPostComplete>(this.rootUrl + data);
  }

  nextPage(){
    this.page += 1;
    this.getPostFeed();
  }

  newLike(postNumber: string): Observable<any>{
    var likeData = '/' + postNumber + '/likes?userNumber=' + '396d0b5c-6291-4fc1-9e7d-5c61ce7fb328'
    console.log("anropar " + this.rootUrl + likeData)
    return this.http.post(this.rootUrl + likeData, null,{withCredentials:true, observe: 'response'});
  }

}

