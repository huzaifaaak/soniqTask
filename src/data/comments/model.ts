export type CommentType = {
  comment: string;
  timestamp: String;
  id: string;
  photoId: string;
};

export type EditCommentType = Pick<CommentType, 'comment' | 'id' | 'photoId'>;
