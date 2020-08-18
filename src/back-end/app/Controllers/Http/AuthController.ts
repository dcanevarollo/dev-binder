import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import LoginValidator from 'App/Validators/LoginValidator';
import Login from 'App/Services/Auth/Login';

export default class AuthController {
  public index({ response, auth }: HttpContextContract) {
    const { user } = auth;

    return response.json(user);
  }

  public async login({ request, response, auth }: HttpContextContract) {
    const credentials = await request.validate(LoginValidator);

    const service = new Login(credentials, auth);

    const token = await service.execute();

    return response.created(token);
  }

  public async logout({ response, auth }: HttpContextContract) {
    await auth.logout();

    return response.ok(null);
  }
}
