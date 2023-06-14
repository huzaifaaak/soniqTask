import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {useQuery} from 'react-query';
import {useGetColumns} from '../../../hooks';
import {Thumbnail, LoadingComponent, EmptyComponent} from '../../../components';
import {PhotoType, getAllPhotos} from '../../../data';
import {ErrorComponent} from '../../../components/ErrorComponent';
import {ThumbnailListHeading} from './styles';
import {THUMBNAIL_HEIGHT} from '../../../utils/constants';

type ThumbnailListPropsType = {
  setSelectedPhoto: React.Dispatch<React.SetStateAction<PhotoType | undefined>>;
};

export const ThumbnailsList: React.FC<ThumbnailListPropsType> = ({
  setSelectedPhoto,
}) => {
  const {isLoading, data, error, refetch} = useQuery('photoData', getAllPhotos);
  const {numOfColumns} = useGetColumns();

  const onThumbnailPress = useCallback(
    (item: PhotoType) => () => setSelectedPhoto(item),
    [setSelectedPhoto],
  );

  const renderThumbnail = useCallback(
    ({item}: {item: PhotoType}) => (
      <Thumbnail
        onThumbnailPress={onThumbnailPress(item)}
        uri={item.download_url}
      />
    ),
    [onThumbnailPress],
  );

  const renderEmptyComponent = useCallback(
    () => <EmptyComponent emptyMessage="No Images" />,
    [],
  );

  const listHeaderComponent = useCallback(
    () => <ThumbnailListHeading>Photo Gallery:</ThumbnailListHeading>,
    [],
  );

  const getItemLayout = useCallback(
    (_: any, index: number) => ({
      length: THUMBNAIL_HEIGHT,
      offset: THUMBNAIL_HEIGHT * index,
      index,
    }),
    [],
  );

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent isLoading={isLoading} reFetch={refetch} />;
  }

  return (
    <>
      <FlatList
        // If number of columns change we need force a re-render
        key={numOfColumns}
        numColumns={numOfColumns}
        ListHeaderComponent={listHeaderComponent}
        data={data}
        renderItem={renderThumbnail}
        ListEmptyComponent={renderEmptyComponent}
        getItemLayout={getItemLayout}
      />
    </>
  );
};
