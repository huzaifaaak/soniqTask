import {PayloadAction, createSelector, createSlice} from '@reduxjs/toolkit';
import {CommentType, EditCommentType} from './model';
import {RootState} from '../store';

type initialStateType = Record<string, CommentType[]>;

export const commentSlice = createSlice({
  name: 'comments',
  initialState: {} as initialStateType,
  reducers: {
    addComment: (state, action: PayloadAction<CommentType>) => {
      const {photoId} = action.payload;
      if (!state[photoId]) {
        state[photoId] = [];
      }
      state[photoId].unshift(action.payload);
    },
    deleteComment: (
      state,
      action: PayloadAction<Pick<CommentType, 'id' | 'photoId'>>,
    ) => {
      const {photoId, id: toDeleteCommentId} = action.payload;

      state[photoId] = state[photoId].filter(
        comment => comment.id !== toDeleteCommentId,
      );
    },
    editComment: (state, action: PayloadAction<EditCommentType>) => {
      const {
        photoId,
        id: editCommentId,
        comment: updatedCommentText,
      } = action.payload;

      state[photoId] = state[photoId].map(comment => {
        if (comment.id === editCommentId) {
          return {
            ...comment,
            comment: updatedCommentText,
          };
        }
        return comment;
      });
    },
  },
});

// actions
const {actions} = commentSlice;

export const {addComment, editComment, deleteComment} = actions;

// Selectors
export const selectAllComments = createSelector(
  (state: RootState) => state,
  (state: RootState) => state.comments,
);
