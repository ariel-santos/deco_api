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

const getUser = ( {response, params}: { response: any, params: { id: string} } ) => {
  const findUser = mockUsers.find( user => user.id === params.id);
  if (findUser) {
    response.status = 200;
    response.body = findUser;
  }
}

const updateUser = async ({ response, params, request }: { response: any, params: {id: string}, request: any }) => {
  let findUser = mockUsers.find( user => user.id === params.id);
  if (findUser) {
    const body = await request.body();
    const editUser: {
      name?: string;
      phone?: string;
      ddd?: string;
      state?: string;
      city?: string;
      ocupation?: string;
      password?: string;
      sendNewsletter?: boolean;
    } = body.value;
    findUser = { ...findUser, ... editUser, update_at: new Date() };
    mockUsers = [... mockUsers.filter( user => user.id !== params.id), findUser];

    response.status = 200;
    response.body = { message: 'ok' };
  } else {
    response.status= 404;
    response.body = { message: 'Content not found'};
  }
} 

export {getUsers, updateUser, getUser};