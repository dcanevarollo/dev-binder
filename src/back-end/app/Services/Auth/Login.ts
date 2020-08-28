import { AuthContract } from '@ioc:Adonis/Addons/Auth';
import User from 'App/Models/User';

interface Token {
  type: string;
  token: string;
  expires_at: string;
}

export default class Login {
  constructor(
    private credentials: { username: string; password: string },
    private auth: AuthContract,
  ) {}

  public async execute() {
    const { username, password } = this.credentials;

    const user = await User.findByOrFail('username', username);

    await user.related('tokens').query().where('type', 'opaque_token').delete();

    const token = (await this.auth.attempt(username, password, {
      expiresIn: '7 days',
    })) as Token;

    return { token, user };
  }
}
