import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { FeedService } from '../home/feed.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  private postComplete;
  private postNumber;

  constructor(private route: ActivatedRoute, private feedService: FeedService) { 
    this.route.params.subscribe( params => this.postNumber = params)
    console.log('post: ' + this.postNumber)
  }

  ngOnInit() {
    this.feedService.getPost(this.postNumber).subscribe(data => {
      this.postComplete = data
    })
  }

}
