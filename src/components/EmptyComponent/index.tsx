import React from 'react';
import {EmptyListContainer, EmptyText} from './styles';

type EmptyComponentPropsType = {
  emptyMessage: string;
};

export const EmptyComponent: React.FC<EmptyComponentPropsType> = ({
  emptyMessage,
}) => {
  return (
    <EmptyListContainer>
      <EmptyText>{emptyMessage}</EmptyText>
    </EmptyListContainer>
  );
};
