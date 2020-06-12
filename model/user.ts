export interface User{
  id: string;
  name: string;
  email: string;
  phone: string;
  ddd: string;
  state: string;
  city: string;
  ocupation: string;
  password: string;
  sendNewsletter: boolean;
  projectsLiked: Array<string>,
  create_at: Date;
  update_at: Date;
}
