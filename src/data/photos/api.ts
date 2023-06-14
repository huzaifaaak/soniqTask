import {BASE_URL} from '../../utils/constants';
import {ApiPhotoType} from './model';

// This will return us the phots as list with a limit of 100
const FILTER = 'list?limit=100';

export const getAllPhotos = (): Promise<ApiPhotoType> =>
  fetch(BASE_URL + FILTER).then(resp => resp.json());
