import React from 'react';
import {TouchableOpacity} from 'react-native';
import {CheckIcon, DeleteIcon, EditIcon} from '../../assets';
import {CommentCardContainer} from './styles';

type CommentCardPropsType = {
  onEditSave: () => void;
  handleEditComment: () => void;
  handleDeleteComment: () => void;
  isEditing: boolean;
};

export const CommentCard: React.FC<CommentCardPropsType> = ({
  handleDeleteComment,
  handleEditComment,
  isEditing,
  onEditSave,
}) => {
  return (
    <CommentCardContainer>
      {isEditing && (
        <TouchableOpacity onPress={onEditSave}>
          <CheckIcon />
        </TouchableOpacity>
      )}
      {!isEditing && (
        <>
          <TouchableOpacity onPress={handleEditComment}>
            <EditIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDeleteComment}>
            <DeleteIcon />
          </TouchableOpacity>
        </>
      )}
    </CommentCardContainer>
  );
};
