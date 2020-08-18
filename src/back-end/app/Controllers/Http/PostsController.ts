import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import PostValidator from 'App/Validators/PostValidator';
import VerifyAuthor from 'App/Services/Posts/VerifyAuthor';
import Post from 'App/Models/Post';

export default class PostsController {
  public async index({ request, response }: HttpContextContract) {
    const { page, user: username } = request.get();

    const posts = await Post.query()
      .preload('author', (authorQuery) => {
        if (username) authorQuery.where('username', username);
      })
      .withCount('likes')
      .paginate(page, 20);

    return response.ok(posts);
  }

  public async store({ request, response, auth }: HttpContextContract) {
    const data = await request.validate(PostValidator);

    const { user } = auth;

    const post = await user?.related('posts').create(data);

    return response.created({ ...post?.serialize(), author: user });
  }

  public async update({
    params,
    request,
    response,
    auth,
  }: HttpContextContract) {
    const data = await request.validate(PostValidator);

    const verification = new VerifyAuthor(params.id, auth);

    const { post, author } = await verification.execute();

    post.merge(data);
    await post.save();

    return response.accepted({ ...post.serialize(), author });
  }

  public async destroy({ params, response, auth }: HttpContextContract) {
    const verification = new VerifyAuthor(params.id, auth);

    const { post } = await verification.execute();

    await post.delete();

    return response.accepted(null);
  }
}
