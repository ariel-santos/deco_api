import { Photo } from "./photo.ts";

export interface Project{
  id: string;
  title: string;
  thumbnail: string;
  photos: Array<Photo>;
  create_at: Date;
  update_at: Date;
  tags: Array<string>;
  description: string;
  author: string;
}
