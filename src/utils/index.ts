import {COLUMN_IN_PORTRAIT, COLUMN_IN_LANDSCAPE} from './constants';

export const calculateNumOfColumns = (height: number, width: number) => {
  if (width > height) {
    return COLUMN_IN_LANDSCAPE;
  } else {
    return COLUMN_IN_PORTRAIT;
  }
};
