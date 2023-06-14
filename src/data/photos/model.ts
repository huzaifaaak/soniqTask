export type PhotoType = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

export type ApiPhotoType = PhotoType[];
