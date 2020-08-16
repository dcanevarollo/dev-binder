import { User } from '../models/user.model';

export interface Account {
  signed: boolean,
  user: User,
};
