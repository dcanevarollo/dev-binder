import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';
import UserValidator from 'App/Validators/UserValidator';

export default class UsersController {
  public async store({ request, response, auth }: HttpContextContract) {
    const data = await request.validate(UserValidator);

    const user = await User.create(data);

    const token = await auth.login(user, { expiresIn: '7 days' });

    return response.created({ user, token });
  }

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
