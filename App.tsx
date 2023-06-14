import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {PhotoGallery} from './src/photoGallery';
import {Provider} from 'react-redux';
import {store} from './src/data';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/theme';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <PhotoGallery />
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
