import { Component, OnInit } from '@angular/core';
import { FeedService } from './feed.service';
import { UserMinimum } from '../user-minimum.model';
import { IPostComplete } from './post.model';
import { Post } from './post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public postCompletes;

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feedService.getPostFeed().subscribe(data =>{
      this.postCompletes = data
      console.log(this.postCompletes);
    })
  }

  onLike(postNumber: string){
    console.log("postComplete har KLICKATS PÅ LIKE" + postNumber)
    this.feedService.newLike(postNumber).subscribe(data => {
      console.log(data)
    })
  }

  onPost(inputText: string){
    const post: Post = {
      user: {
        userNumber: null,
        firstName: null,
        surName: null
      },
      text: inputText,
      pictureUrl: null,
      likes: null,
      comments: null,
      timestamp: null,
      postNumber: null
    }
    console.log("Post new Post har klickats på!")
    this.feedService.createNewPost(post).subscribe(data => {
      console.log(data)
    })
  }

}
