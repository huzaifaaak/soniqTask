import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import {THUMBNAIL_HEIGHT} from '../../utils/constants';

export const ThumbnailPhoto = styled(FastImage)`
  height: ${THUMBNAIL_HEIGHT}px;
  flex-grow: 1;
`;

export const ThumbnailContainer = styled.TouchableOpacity`
  flex: 1;
  margin: 1px;
`;
