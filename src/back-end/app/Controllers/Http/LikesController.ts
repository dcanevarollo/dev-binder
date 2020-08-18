import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import LikeValidator from 'App/Validators/LikeValidator';

export default class LikesController {
  public async store({ request, response, auth }: HttpContextContract) {
    const { post_id: id } = await request.validate(LikeValidator);

    await auth.user?.related('likedPosts').attach([id]);

    return response.created(null);
  }

  public async destroy({ params, response, auth }: HttpContextContract) {
    const { post_id: id } = params;

    await auth.user?.related('likedPosts').detach([id]);

    return response.ok(null);
  }
}
