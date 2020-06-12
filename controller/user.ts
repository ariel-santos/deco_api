import { User } from "../model/user.ts";


let mockUsers: Array<User> = [
  {
    id: '1',
    name: 'Nome 1',
    email: 'Email 1',
    create_at: new Date(),
    update_at: new Date(),
    phone: '11111111',
    ddd: '11',
    state: 'sp',
    city: 'sao paulo',
    ocupation: '1',
    password: '1',
    sendNewsletter: false,
    projectsLiked: []
  },
  {
    id: '2',
    name: 'Nome 2',
    email: 'Email 2',
    create_at: new Date(),
    update_at: new Date(),
    phone: '22222222',
    ddd: '22',
    state: 'sp',
    city: 'sao paulo',
    ocupation: '2',
    password: '2',
    sendNewsletter: false,
    projectsLiked: []
  }
];

const getUsers = ({ response }: { response: any }) => {
  response.body = mockUsers;
}

export {getUsers};