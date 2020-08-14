import { User } from './user.model';
import { File } from './file.model';

export class Post {
  id: string;
  user: User;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  likes: User[];
  files: File[];
}
