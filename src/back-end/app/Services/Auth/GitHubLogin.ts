import { AuthContract } from '@ioc:Adonis/Addons/Auth';
import Env from '@ioc:Adonis/Core/Env';
import axios from 'axios';
import User from 'App/Models/User';

interface GitHubTokenResponse {
  access_token: string;
  scope: string;
  token_type: string;
}

interface GitHubUserResponse {
  login: string;
  avatar_url: string;
  name: string;
  company: string;
  location: string;
  bio: string;
}

export default class GitHubLogin {
  constructor(private code: string, private auth: AuthContract) {}

  public async execute() {
    const { data: token } = await axios.post<GitHubTokenResponse>(
      'https://github.com/login/oauth/access_token',
      {
        client_id: Env.getOrFail('GITHUB_CLIENT_ID'),
        client_secret: Env.getOrFail('GITHUB_CLIENT_SECRET'),
        code: this.code,
      },
      {
        headers: { Accept: 'application/json' },
      },
    );

    const { data } = await axios.get<GitHubUserResponse>(
      'https://api.github.com/user',
      {
        headers: { Authorization: `token ${token.access_token}` },
      },
    );

    const user = await User.firstOrCreate(
      { username: data.login },
      {
        name: data.name,
        username: data.login,
        avatarUrl: data.avatar_url,
        company: data.company,
        location: data.location,
        bio: data.bio,
      },
    );

    await user.related('tokens').query().where('type', 'opaque_token').delete();

    const apiToken = await this.auth.login(user, { expiresIn: '7 days' });

    return { token: apiToken, user };
  }
}
