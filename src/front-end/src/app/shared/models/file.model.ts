import { Post } from './post.model';

export class File {
  id: string;
  post: Post;
  type: string;
  subtype: string;
  url: string;
}
