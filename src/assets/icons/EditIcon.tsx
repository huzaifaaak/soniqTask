import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const EditIcon: React.FC = () => {
  return (
    <Svg height={30} viewBox="0 -960 960 960" width={30} fill="#777">
      <Path d="M180-180h44l443-443-44-44-443 443v44zm614-486L666-794l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42zm-42 42L248-120H120v-128l504-504 128 128zm-107-21l-22-22 44 44-22-22z" />
    </Svg>
  );
};
