import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import UserValidator from 'App/Validators/UserValidator';
import Login from 'App/Services/Auth/Login';

export default class AuthController {
  public index({ response, auth }: HttpContextContract) {
    const { user } = auth;

    return response.json(user);
  }

  public async login({ request, response, auth }: HttpContextContract) {
    const data = await request.validate(UserValidator);

    const service = new Login(data, auth);

    const token = await service.execute();

    return response.created(token);
  }

  public async logout({ response, auth }: HttpContextContract) {
    await auth.logout();

    return response.ok(null);
  }
}
