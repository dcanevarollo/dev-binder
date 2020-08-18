import User from 'App/Models/User';
import { AuthContract } from '@ioc:Adonis/Addons/Auth';
import axios from 'axios';
import UserNotFoundException from 'App/Exceptions/UserNotFoundException';

interface Token {
  type: string;
  token: string;
  expires_at?: string;
}

interface GithubResponse {
  login: string;
  avatar_url: string;
  name: string;
  company: string;
  bio: string;
}

export default class Login {
  constructor(
    private credentials: {
      username: string;
      password: string;
    },
    private auth: AuthContract,
  ) {}

  public async execute(): Promise<Token | null> {
    const { credentials, auth } = this;

    let user = await User.findBy('username', credentials.username);

    const expiration = { expiresIn: '7 days' };

    let token: Token;

    if (user) {
      await user
        .related('tokens')
        .query()
        .where('type', 'opaque_token')
        .delete();

      const { username, password } = credentials;

      token = await auth.attempt(username, password, expiration);
    } else {
      try {
        const response = await axios.get<GithubResponse>(
          `https://api.github.com/users/${credentials.username}`,
        );

        const { data: info } = response;

        user = await User.create({
          ...credentials,
          name: info.name,
          bio: info.bio,
          currentJob: info.company,
          avatarUrl: info.avatar_url,
        });

        token = await auth.login(user, expiration);
      } catch (error) {
        const { status } = error.response;

        if (status === 404)
          throw new UserNotFoundException(credentials.username);

        return null;
      }
    }

    return token;
  }
}
