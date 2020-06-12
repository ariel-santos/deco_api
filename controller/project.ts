import { Project } from "../model/project.ts";
import { Photo } from "../model/photo.ts";

let mockProjects: Array<Project> = [
  {
    id: '1',
    title: '1',
    thumbnail: '1',
    photos: [],
    create_at: new Date(),
    update_at: new Date(),
    tags: [],
    description: '1 1 1 1 ',
    author: '1'
  },
  {
    id: '2',
    title: '2',
    thumbnail: '2',
    photos: [],
    create_at: new Date(),
    update_at: new Date(),
    tags: [],
    description: '2 2 2 2',
    author: '2'
  }
];


const getProjects = ({ response }: { response: any }) => {
  response.body = mockProjects;
}

const getProject = ({ params, response }: { params: { id: string }, response: any }) => {
  const findProject = (params && params.id) ? mockProjects.find(project => project.id === params.id) : 0;
  if (findProject) {
    response.status = 200;
    response.body = findProject;
  } else {
    response.status = 404;
    response.body = { message: 'Content not found' };
  }
}

const updateProject = async ({ params, response, request }: { params: { id: string }, response: any, request: any }) => {
  let findProject = mockProjects.find(project => project.id === params.id);
  if (findProject) {
    const body = await request.body();
    const editProject: {
      title?: string,
      thumbnail?: string,
      photos?: Array<Photo>,
      tags?: Array<string>,
      description?: string,
      author?: string,
    } = body.value;

    findProject = {... findProject, ... editProject, update_at: new Date() }
    mockProjects = [ ... mockProjects.filter( project => project.id !== params.id), findProject];

    response.status = 200;
    response.body = { message: 'ok' };
  } else {
    response.status = 404;
    response.body = { message: 'Content not found' };
  }
}

const addProject = async ({ response, request }: { response: any, request: any }) => {
  const body = await request.body();
  const project: Project = body.value;

  project.create_at = new Date();
  project.update_at = new Date();

  mockProjects.push(project);
  response.body = { message: 'Ok' };
  response.status = 200;
}

export { getProjects, getProject, updateProject, addProject };