import { UserMinimum } from "./user-minimum.model";

export class PostComment {
    text: string
    user: UserMinimum
    timestamp: Date
    replies: CommentReply[]
    commentNumber: string
    isReplyable: boolean
}


export class CommentReply{
    text: string
    date: Date
    user: UserMinimum
    isCommentable: boolean
  }