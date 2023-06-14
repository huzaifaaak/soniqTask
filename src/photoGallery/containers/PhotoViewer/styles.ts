import FastImage from 'react-native-fast-image';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import {styled} from 'styled-components/native';

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  margin: ${({theme}) => theme.spacing.s8};
`;

export const ModalPhoto = styled(FastImage)<{height: number}>`
  height: ${p => p.height}px;
  flex-grow: 1;
`;

export const CloseIconContainer = styled.TouchableOpacity`
  align-self: flex-end;
  margin-bottom: ${({theme}) => theme.spacing.s4};
`;

export const CommentsFlatList = styled(KeyboardAwareFlatList).attrs(() => ({
  contentContainerStyle: {
    flexGrow: 1,
  },
}))``;
