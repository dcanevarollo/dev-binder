import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { FindUser } from 'App/Services/User/FindUser';

export default class UsersController {
  public async index({}: HttpContextContract) {}

  public async show({ params, request, response }: HttpContextContract) {
    const { id } = params;

    const query = request.get();

    const service = new FindUser(id, query);

    const user = await service.execute();

    return response.json(user);
  }
}
