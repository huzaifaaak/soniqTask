import styled from 'styled-components/native';

export const CommentInputText = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.colors.grey_400,
}))<{hideBorder?: boolean}>`
  max-height: 100px;
  min-height: 50px;
  border-width: ${p => (p.hideBorder ? '0px' : '1px')};
  font-size: ${({theme}) => theme.font.size.h2};
  border-radius: ${({theme}) => theme.borders.r4};
  border-color: ${({theme}) => theme.colors.grey_100};
  color: ${({theme}) => theme.colors.grey_0};
  flex-shrink: 1;
  padding: ${({theme}) => theme.spacing.s8};
`;
