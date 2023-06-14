import React from 'react';

import {ErrorContainer, ErrorText} from './styles';
import {RefreshControl} from 'react-native';

type ErrorComponentPropsType = {
  isLoading: boolean;
  reFetch: () => void;
};

export const ErrorComponent: React.FC<ErrorComponentPropsType> = ({
  isLoading,
  reFetch,
}) => {
  return (
    <ErrorContainer
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={reFetch} />
      }>
      <ErrorText>Error Loading. Pull to Refresh</ErrorText>
    </ErrorContainer>
  );
};
