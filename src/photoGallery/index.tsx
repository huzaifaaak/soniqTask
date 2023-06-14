import React, {useCallback, useState} from 'react';
import {SafeAreaContainer} from './styles';
import {PhotoType} from '../data';
import {PhotoViewer} from './containers/PhotoViewer';
import {ThumbnailsList} from './containers/ThumbnailsList';

export const PhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoType | undefined>(
    undefined,
  );

  const closeModal = useCallback(() => setSelectedPhoto(undefined), []);

  return (
    <SafeAreaContainer>
      <ThumbnailsList setSelectedPhoto={setSelectedPhoto} />
      {selectedPhoto && (
        <PhotoViewer
          handleCloseModal={closeModal}
          selectedPhoto={selectedPhoto}
        />
      )}
    </SafeAreaContainer>
  );
};
