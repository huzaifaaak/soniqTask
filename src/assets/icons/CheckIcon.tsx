import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const CheckIcon: React.FC = () => {
  return (
    <Svg height={30} viewBox="0 -960 960 960" width={30} fill={'#777'}>
      <Path d="M378-246L154-470l43-43 181 181 384-384 43 43-427 427z" />
    </Svg>
  );
};
