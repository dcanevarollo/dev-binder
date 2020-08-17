import { User } from './user.model';

export interface Tech {
  id: string;
  name: string;
  users: User[];
}
