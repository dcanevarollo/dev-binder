import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import FollowerValidator from 'App/Validators/FollowerValidator';

export default class FollowersController {
  public async store({ request, response, auth }: HttpContextContract) {
    const { user_id: id } = await request.validate(FollowerValidator);

    await auth.user?.related('following').attach([id]);

    return response.created(null);
  }

  public async destroy({ params, response, auth }: HttpContextContract) {
    const { user_id: id } = params;

    await auth.user?.related('following').detach([id]);

    return response.ok(null);
  }
}
