import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PostService } from './post.service';
import { Post } from '../home/post.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private postComplete;
  private postNumber;
  public uNumber = sessionStorage.getItem('userNumber')

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) {
    this.route.params.subscribe(params => this.postNumber = params)
    this.postNumber = route.snapshot.params["id"];
    console.log('post: ' + this.postNumber)
    this.postService.getPost(this.postNumber).subscribe(data => {
      this.postComplete = data
      this.postComplete.seeComments = true
      console.log(data)
    })
  }

  ngOnInit() { }

  makeEditable(post: Post){
    post.isEditable = true
    console.log('editar : ' + post.text)
    console.log('är editable : ' + post.isEditable)
  }

  makeCommentable(post: Post){
    post.isCommentable = true
    console.log('är commentable : ' + post.isCommentable)
  }

  onComment(post: Post, newComment: string){
    post.isCommentable = false
    this.postService.commentPost(post.postNumber, newComment).subscribe(data =>{
      console.log(data)
    })
  }

  onEdit(post: Post, newText: string){
    post.isEditable = false
    this.postService.editPost(post.postNumber, newText).subscribe(data => {
      console.log(data)
    })
  }

  onLike(postNumber: string){
    this.postService.newLike(postNumber).subscribe(data => {
      console.log(data)
    })
  }

  onDelete(postNumber: string){
    this.postService.deletePost(postNumber).subscribe(data =>{
      console.log(data)
    })
    this.goHome()
  }

  goHome() {
    this.router.navigate(['/dashboard/home']); 
  }

}
