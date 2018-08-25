import { Component, OnInit } from '@angular/core';
import { FeedService } from './feed.service';
import { UserMinimum } from '../user-minimum.model';
import { IPostComplete } from './post.model';
import { Post } from './post.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public postCompletes;
  public uNumber = sessionStorage.getItem('userNumber')
  private miniUser;
  private tempNewPost: Post = new Post
  private selectedImage;


  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feedService.getPostFeed().subscribe(data =>{
      this.postCompletes = data
      console.log(data)
        if(this.postCompletes != undefined){
          this.postCompletes.forEach(element => {
            element.post.isEditable = false
            element.post.isCommentable = false
            element.post.seeComments = false
            
          });
      }
    })

    this.feedService.getMiniUser().subscribe(data =>{
      this.miniUser = data
      console.log(data)
    })
  }


  


  makeEditable(post: Post){
    post.isEditable = true
    console.log('editar : ' + post.text)
    console.log('är editable : ' + post.isEditable)
  }

 seeComments(post: Post){
   if(post.seeComments == false){
    post.seeComments = true
   } else{
     post.seeComments = false
   }

   console.log('see comments: ' + post.seeComments)

 }



  makeCommentable(post: Post){
    if(post.isCommentable == false){
      post.isCommentable = true
    } else {
      post.isCommentable = false
    }
    
    console.log('är commentable : ' + post.isCommentable)
  }

  onComment(post: Post, newComment: string){
    post.isCommentable = false
    this.feedService.commentPost(post.postNumber, newComment).subscribe(data =>{
      console.log(data)
    })
  }

  onEdit(post: Post, newText: string){
    post.isEditable = false
    this.feedService.editPost(post.postNumber, newText).subscribe(data => {
      console.log(data)
    })
  }

  onLike(postNumber: string){
    this.feedService.newLike(postNumber).subscribe(data => {
      console.log(data)
    })
  }

  onDelete(postNumber: string){
    this.feedService.deletePost(postNumber).subscribe(data =>{
      console.log(data)
    })
  }

  loadMorePosts(){
    this.feedService.nextPage()
    this.feedService.getPostFeed().subscribe(data =>{
      console.log(data)
      this.postCompletes = this.postCompletes.concat(data)
      if(this.postCompletes != undefined){
        this.postCompletes.forEach(element => {
          element.post.isEditable = false
          element.post.isCommentable = false
          element.post.seeComments = false
          element.post.comments.forEach(comment =>{
            comment.isReplyable = false
          })
        });
    }
    })
  }

  onImageChanged(event) {
    this.selectedImage = event.target.files;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.tempNewPost.pictureUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }



  onPost(inputText: string){
    const post: Post = {
      user: {
        userNumber: null,
        firstName: null,
        surName: null
      },
      text: inputText,
      pictureUrl: this.tempNewPost.pictureUrl,
      likes: null,
      comments: null,
      date: null,
      postNumber: null,
      isEditable: false,
      isCommentable: false,
      seeComments: false,
      formattedDate: undefined
    }

    this.feedService.createNewPost(post).subscribe(data => {
      console.log(data)
    })
  }

  likeComment(postNumber, commentNumber){
    this.feedService.likeComment(postNumber, commentNumber).subscribe(data =>{
      console.log(data)
    })
  }

  makeReplyable(comment){
    comment.isReplyable = true;
  }

  replyToComment(postNumber, commentNumber, newReply: string){
    console.log('skriver ut commentnumber' + commentNumber)
    this.feedService.replyToComment(postNumber, commentNumber, newReply).subscribe(data =>{
      console.log(data)
    })
  }

  onScroll() {
    this.loadMorePosts();
  }

}
