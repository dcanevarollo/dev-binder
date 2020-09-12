import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import LoginValidator from 'App/Validators/LoginValidator';
import Login, { Credentials } from 'App/Services/Auth/Login';
import GitHubLogin from 'App/Services/Auth/GitHubLogin';

export default class AuthController {
  public async login({ request, response, auth }: HttpContextContract) {
    const credentials = await request.validate(LoginValidator);

    let service: GitHubLogin | Login;

    if (credentials.code) service = new GitHubLogin(credentials.code, auth);
    else service = new Login(credentials as Credentials, auth);

    const data = await service.execute();

    return response.accepted(data);
  }

  public async logout({ response, auth }: HttpContextContract) {
    await auth.logout();

    return response.ok(null);
  }
}
