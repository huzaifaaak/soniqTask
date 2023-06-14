import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const DeleteIcon: React.FC = () => {
  return (
    <Svg height={30} fill={'#777'} viewBox="0 -960 960 960" width={30}>
      <Path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261zm438-630H261v570h438v-570zM367-266h60v-399h-60v399zm166 0h60v-399h-60v399zM261-750v570-570z" />
    </Svg>
  );
};
