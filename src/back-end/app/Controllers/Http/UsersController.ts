import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';

export default class UsersController {
  public async index({}: HttpContextContract) {}

  public async show({ params, response }: HttpContextContract) {
    const { id: username } = params;

    const user = await User.findByOrFail('username', username);

    await user.preload((preloader) =>
      preloader.preload('posts').preload('techs'),
    );

    return response.json(user);
  }
}
