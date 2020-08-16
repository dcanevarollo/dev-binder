import User from 'App/Models/User';
import { AuthContract } from '@ioc:Adonis/Addons/Auth';

interface Token {
  type: string;
  token: string;
  expires_at?: string;
}

export class StoreUser {
  constructor(
    private data: {
      name: string;
      username: string;
      password: string;
      bio?: string;
      current_job?: string;
      avatar_url?: string;
    },
    private auth: AuthContract,
  ) {}

  public async execute(): Promise<Token> {
    const { data, auth } = this;

    let user = await User.findBy('username', data.username);

    const exp = { expiresIn: '7 days' };

    let token: Token;

    if (user) {
      const { username, password } = data;

      token = await auth.attempt(username, password, exp);
    } else {
      user = await User.create(data);

      token = await auth.login(user, exp);
    }

    return token;
  }
}
