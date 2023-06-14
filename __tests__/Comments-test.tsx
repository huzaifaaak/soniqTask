import {describe, expect, it} from '@jest/globals';

import {
  CommentType,
  addComment,
  deleteComment,
  editComment,
  store,
} from '../src/data';

const dummyCommentId = '1';
const dummyPhotoId = '123';

const dummyComment: CommentType = {
  comment: 'This is for test',
  id: dummyCommentId,
  photoId: dummyPhotoId,
  timestamp: '2023-06-14T08:37:44.496Z',
};

const expectedCommentsList = {
  [dummyPhotoId]: [dummyComment],
};

const editDummyComment: CommentType = {
  ...dummyComment,
  comment: 'Editing the test comment',
};

describe('It workds ', () => {
  it('should be empty ', () => {
    const state = store.getState().comments;
    expect(state).toEqual({});
  });
  it('it should add comments', () => {
    store.dispatch(addComment(dummyComment));
    const comments = store.getState().comments;
    expect(comments).toEqual(expectedCommentsList);
  });
  it('it should edit commment', () => {
    store.dispatch(editComment(editDummyComment));
    const comments = store.getState().comments;
    expect(comments).toEqual({
      [dummyPhotoId]: [editDummyComment],
    });
  });
  it('it should delete comment', () => {
    store.dispatch(deleteComment({id: dummyCommentId, photoId: dummyPhotoId}));
    const comments = store.getState().comments;
    expect(comments).toEqual({
      [dummyPhotoId]: [],
    });
  });
});
