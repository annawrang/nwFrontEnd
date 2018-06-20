import { UserMinimumInterface } from '../user-minimum.model';
import { PostComment } from "../post-comment.model";

export class Post { 
    text: string
    pictureUrl: string
    user: UserMinimumInterface
    likes: Number
    comments: PostComment[]
    timestamp: Date
    postNumber: string
}


export interface IComment{
    user: UserMinimumInterface,
    post: IPost,
    text: string,
    timestamp: Date
  }
  
  export interface IPost{
    text: string,
    user: UserMinimumInterface,
    pictureUrl: string,
    timestamp: Date,
    postNumber: string
  }
  
  export interface IPostComplete{
    post: IPost,
    likes: number,
    comments: IComment[]
  }
