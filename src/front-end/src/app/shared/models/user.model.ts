import { Tech } from './tech.model';
import { Post } from './post.model';

export interface User {
  id?: string;
  name?: string;
  username: string;
  password: string;
  avatar_url?: string;
  current_job?: string;
  bio?: string;
  github_url?: string;
  posts?: Post[];
  followers?: User[];
  liked_posts?: Post[]
  techs?: Tech[];
}
