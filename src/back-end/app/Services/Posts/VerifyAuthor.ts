import { AuthContract } from '@ioc:Adonis/Addons/Auth';
import Post from 'App/Models/Post';
import NotAllowedException from 'App/Exceptions/NotAllowedException';
import User from 'App/Models/User';

export default class VerifyAuthor {
  constructor(private postId: string, private auth: AuthContract) {}

  public async execute(): Promise<{ post: Post; author: User }> {
    const post = await Post.findOrFail(this.postId);

    const { user } = this.auth;

    if (post.userId !== user?.id) throw new NotAllowedException();

    return { post, author: user };
  }
}
