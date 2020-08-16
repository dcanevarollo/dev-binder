import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import UserValidator from 'App/Validators/UserValidator';
import { StoreUser } from 'App/Services/User/StoreUser';

export default class UsersController {
  public async store({ request, response, auth }: HttpContextContract) {
    const data = await request.validate(UserValidator);

    const service = new StoreUser(data, auth);

    const authentication = await service.execute();

    return response.created(authentication);
  }
}
