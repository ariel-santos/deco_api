export interface Photo {
  title: string;
  create_at: Date;
  update_at: Date;
  image: string;
  tags: Array<string>;
  author: string;
  size: string; // 1x1, 1x2, 2x1, 2x2
}