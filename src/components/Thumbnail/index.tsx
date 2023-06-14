import React from 'react';
import {ThumbnailContainer, ThumbnailPhoto} from './styles';

type ThumbnailType = {
  uri: string;
  onThumbnailPress: () => void;
};

export const Thumbnail: React.FC<ThumbnailType> = ({uri, onThumbnailPress}) => {
  return (
    <ThumbnailContainer activeOpacity={0.9} onPress={onThumbnailPress}>
      <ThumbnailPhoto
        source={{
          uri,
        }}
      />
    </ThumbnailContainer>
  );
};
