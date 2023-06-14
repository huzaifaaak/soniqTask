import {css, styled} from 'styled-components/native';

export const CommentsContainer = styled.View`
  margin-top: ${({theme}) => theme.spacing.s8};
`;

export const CommentInput = styled.TextInput(
  ({theme: {colors, borders}}) => css`
    max-height: 100px;
    min-height: 50px;
    border-width: 1px;
    font-size: ${({theme}) => theme.font.size.h2};
    border-radius: ${borders.r4};
    border-color: ${colors.grey_100};
    color: ${colors.grey_0};
  `,
);

export const PostButtonContainer = styled.TouchableOpacity<{
  isDisabled: boolean;
}>(
  ({isDisabled, theme: {colors, borders, spacing}}) => css`
    margin-top: ${spacing.s8};
    background-color: ${colors.azure};
    opacity: ${isDisabled ? 0.5 : 1};
    width: 20%;
    padding: ${spacing.s8};
    border-radius: ${borders.r4};
    align-self: flex-end;
    align-items: center;
    justify-content: center;
  `,
);

export const PostButton = styled.Text`
  font-weight: 600;
  font-size: ${({theme}) => theme.font.size.h2};
  color: ${({theme}) => theme.colors.white};
`;
