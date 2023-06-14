import React from 'react';
import {CommentsContainer, PostButton, PostButtonContainer} from './styles';
import {InputBox} from '../../../../components/InputBox';
import {useComment} from '../../../../hooks/useComment';

type CommentInputBoxPropsType = {
  photoId: string;
};

export const CommentInputBox: React.FC<CommentInputBoxPropsType> = ({
  photoId,
}) => {
  const {commentValue, setCommentValue, onSaveComment} = useComment();

  const isButtonDisabled = commentValue.length === 0;
  return (
    <>
      <CommentsContainer>
        <InputBox value={commentValue} onChangeText={setCommentValue} />
        {/* One disabled property is to disable the interaction
        Other one is to disable the styles */}
        <PostButtonContainer
          onPress={onSaveComment(photoId)}
          isDisabled={isButtonDisabled}
          disabled={isButtonDisabled}>
          <PostButton>Post</PostButton>
        </PostButtonContainer>
      </CommentsContainer>
    </>
  );
};
