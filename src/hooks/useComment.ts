import {useCallback, useState} from 'react';
import {useAppDispatch} from './hooks';
import {addComment, deleteComment, editComment} from '../data';

export const useComment = (comment = '') => {
  const [commentValue, setCommentValue] = useState<string>(comment);
  const dispatch = useAppDispatch();
  const onSaveComment = useCallback(
    (photoId: string) => () => {
      dispatch(
        addComment({
          id: new Date().getTime().toString(),
          timestamp: new Date().toISOString(),
          comment: commentValue,
          photoId,
        }),
      );
      setCommentValue('');
    },
    [commentValue, dispatch],
  );

  const onDeleteComment = useCallback(
    (id: string, photoId: string) => {
      dispatch(
        deleteComment({
          id,
          photoId,
        }),
      );
    },
    [dispatch],
  );

  const onEditComment = useCallback(
    (id: string, photoId: string) => {
      const trimmedComment = commentValue.trim();
      setCommentValue(trimmedComment);

      dispatch(
        editComment({
          comment: trimmedComment,
          photoId,
          id,
        }),
      );
    },
    [commentValue, dispatch],
  );

  return {
    commentValue,
    setCommentValue,
    onSaveComment,
    onEditComment,
    onDeleteComment,
  };
};
