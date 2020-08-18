import { User } from './user.model';

export interface Post {
  id: string;
  title: string;
  content: string;
  created_at: {
    default: string;
    formatted: string;
  };
  author: User;
  likes_count: number;
  updated: boolean;
}
