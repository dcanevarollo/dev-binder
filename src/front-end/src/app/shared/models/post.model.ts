import { User } from './user.model';

export interface Post {
  id: string;
  author: User;
  title: string;
  content: string;
  created_at: {
    default: string;
    formatted: string;
  };
  updated: boolean;
  likes: User[];
}
