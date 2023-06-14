import {styled} from 'styled-components/native';

export const ThumbnailListHeading = styled.Text`
  font-weight: bold;
  font-size: ${({theme}) => theme.font.size.h1};
  margin-bottom: ${({theme}) => theme.spacing.s8};
`;
