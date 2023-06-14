import React, {useCallback} from 'react';
import {
  CloseIconContainer,
  CommentsFlatList,
  ModalPhoto,
  SafeAreaContainer,
} from './styles';
import {CommentInputBox} from '../Comments/CommentInputBox';
import {CommentType, PhotoType, selectAllComments} from '../../../data';
import {useSelector} from 'react-redux';
import {Modal, useWindowDimensions} from 'react-native';
import {CommentsList} from '../Comments/CommentsList';
import {CloseIcon} from '../../../assets';
import {EmptyComponent} from '../../../components';

type PhotoViewerType = {
  selectedPhoto: PhotoType;
  handleCloseModal: () => void;
};

type ListItemType = {
  item: CommentType;
};

export const PhotoViewer: React.FC<PhotoViewerType> = ({
  selectedPhoto,
  handleCloseModal,
}) => {
  const allComments = useSelector(selectAllComments);
  const {height} = useWindowDimensions();

  const listHeaderComponent = useCallback(
    () => (
      <>
        <CloseIconContainer onPress={handleCloseModal}>
          <CloseIcon />
        </CloseIconContainer>

        {/* Renders the photo in modal */}
        <ModalPhoto
          // Made the image cover only 45% of height
          height={height * 0.45}
          resizeMode="cover"
          source={{
            uri: selectedPhoto.download_url,
          }}
        />
        {/* Renders input box and Post button. It - */}
        {/* also handles saving comment to reducer */}
        <CommentInputBox photoId={selectedPhoto.id} />
      </>
    ),
    [handleCloseModal, height, selectedPhoto.download_url, selectedPhoto.id],
  );

  const renderItem = useCallback(
    ({item}: ListItemType) => (
      // This renders all of comments
      <CommentsList {...item} photoId={selectedPhoto.id} />
    ),
    [selectedPhoto.id],
  );

  const listEmptyComponent = useCallback(
    () => <EmptyComponent emptyMessage="No Comments..." />,
    [],
  );

  return (
    <Modal
      visible
      animationType="slide"
      supportedOrientations={['landscape', 'portrait']}>
      <SafeAreaContainer>
        <CommentsFlatList
          ListHeaderComponent={listHeaderComponent}
          data={allComments[selectedPhoto.id]}
          renderItem={renderItem}
          ListEmptyComponent={listEmptyComponent}
        />
      </SafeAreaContainer>
    </Modal>
  );
};
