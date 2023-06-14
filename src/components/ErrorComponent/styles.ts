import {ViewStyle} from 'react-native';
import {styled} from 'styled-components/native';

export const ErrorContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  } as ViewStyle,
}))``;

export const ErrorText = styled.Text`
  font-size: ${({theme}) => theme.font.size.h3};
`;
