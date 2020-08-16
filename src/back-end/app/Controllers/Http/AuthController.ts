import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class AuthController {
  public async logout({ response, auth }: HttpContextContract) {
    await auth.logout();

    return response.ok(null);
  }
}
