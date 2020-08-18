import { Tech } from './tech.model';
import { Post } from './post.model';

export interface User {
  id: string;
  name: string;
  username: string;
  password: string;
  avatar_url?: string;
  current_job?: string;
  bio?: string;
  posts?: Post[];
  techs?: Tech[];
  github_url: string;
  followers_count?: number;
  following_count?: number;
}
