import { UserMinimumInterface } from '../user-minimum.model';
import { PostComment } from "../post-comment.model";

export class Post { 
    text: string
    pictureUrl
    user: UserMinimumInterface
    likes: number
    comments: PostComment[]
    timestamp: Date
    postNumber: string
    isEditable: boolean
    isCommentable: boolean
    seeComments: boolean

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
    isEditable: boolean
  }
  
  export interface IPostComplete{
    post: IPost,
    likes: number,
    comments: IComment[]
  }
