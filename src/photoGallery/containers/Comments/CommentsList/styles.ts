import {css, styled} from 'styled-components/native';

export const CommentTextContainer = styled.View(
  ({theme: {colors, spacing}}) => {
    return css`
      margin: ${spacing.s8} 0;
      border: ${spacing.s4} solid ${colors.grey_200};
      background-color: ${colors.grey_300};
      border-radius: ${spacing.s4};
      flex-direction: row;
      justify-content: space-between;
    `;
  },
);
