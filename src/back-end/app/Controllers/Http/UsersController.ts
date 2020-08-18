import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';

export default class UsersController {
  public async show({ params, response }: HttpContextContract) {
    const { username } = params;

    const user = await User.query()
      .preload('posts', (postsQuery) => {
        postsQuery.withCount('likes');
      })
      .preload('techs')
      .withCount('followers')
      .withCount('following')
      .where('username', username)
      .firstOrFail();

    return response.json(user);
  }
}
