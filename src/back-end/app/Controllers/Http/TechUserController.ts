import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import TechUserValidator from 'App/Validators/TechUserValidator';

export default class TechUserController {
  public async store({ request, response, auth }: HttpContextContract) {
    const { techs_id: ids } = await request.validate(TechUserValidator);

    await auth.user?.related('techs').attach(ids);

    return response.created(null);
  }

  public async destroy({ params, response, auth }: HttpContextContract) {
    const { tech_id: id } = params;

    await auth.user?.related('techs').detach([id]);

    return response.ok(null);
  }
}
