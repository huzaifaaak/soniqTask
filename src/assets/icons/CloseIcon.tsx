import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const CloseIcon = () => {
  return (
    <Svg height={30} fill={'#777'} viewBox="0 -960 960 960" width={30}>
      <Path d="M249-207l-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231z" />
    </Svg>
  );
};
