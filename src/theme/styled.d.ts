import 'styled-components/native';
import {colors} from './colors';
import {spacing} from './spacing';
import {borders} from './borders';
import {font} from './font';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: typeof colors;
    spacing: typeof spacing;
    borders: typeof borders;
    font: typeof font;
  }
}
