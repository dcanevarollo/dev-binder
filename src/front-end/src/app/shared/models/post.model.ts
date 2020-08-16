import { User } from './user.model';
import { File } from './file.model';

export interface Post {
  id: string;
  author: User;
  title: string;
  content: string;
  created_at: {
    default: string;
    formatted: string;
  };
  updated_at: string;
  files: File[];
  likes: User[];
}
