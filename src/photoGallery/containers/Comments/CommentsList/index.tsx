import React, {useCallback, useRef, useState} from 'react';
import {CommentType} from '../../../../data';
import {CommentTextContainer} from './styles';
import {InputBox} from '../../../../components/InputBox';
import {TextInput} from 'react-native';
import {CommentCard} from '../../../../components';
import {useComment} from '../../../../hooks/useComment';

export const CommentsList: React.FC<CommentType> = ({comment, id, photoId}) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const {commentValue, setCommentValue, onEditComment, onDeleteComment} =
    useComment(comment);

  // handleEditComment is called when user presses edit icon
  const handleEditComment = useCallback(() => {
    if (inputRef.current) {
      setIsEditing(true);
      // This will focus on the input user is editing
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, []);

  // OnEditSave is called when user presses checkIcon to update the comment
  const onEditSave = useCallback(() => {
    onEditComment(id, photoId);
    setIsEditing(false);
  }, [id, onEditComment, photoId]);

  const handleDeleteComment = useCallback(() => {
    onDeleteComment(id, photoId);
  }, [id, onDeleteComment, photoId]);

  return (
    <CommentTextContainer>
      <InputBox
        value={commentValue}
        onChangeText={setCommentValue}
        editable={isEditing}
        ref={inputRef}
        hideBorder
      />
      <CommentCard
        handleDeleteComment={handleDeleteComment}
        handleEditComment={handleEditComment}
        isEditing={isEditing}
        onEditSave={onEditSave}
      />
    </CommentTextContainer>
  );
};
