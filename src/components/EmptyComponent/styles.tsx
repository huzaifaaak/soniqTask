import {styled} from 'styled-components/native';

export const EmptyListContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: ${({theme}) => theme.font.size.h3};
  font-weight: bold;
`;
