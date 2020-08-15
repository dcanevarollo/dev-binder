import { Tech } from './tech.model';
import { Post } from './post.model';

export class User {
  id: string;
  name: string;
  username: string;
  bio: string;
  currentJob: string;
  createdAt: string;
  avatarUrl: string;
  githubUrl: string;
  techs: Tech[];
  posts: Post[];
  followers: User[];
}
