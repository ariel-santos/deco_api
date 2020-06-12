export interface Mosaic {
  content: Array<MosaicItem>;
}

export interface MosaicItem {
  title: string;
  thumbnail: string;
  size: string; // 1x1, 1x2, 2x1, 2x2
}
