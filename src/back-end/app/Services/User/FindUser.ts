import User from 'App/Models/User';

export class FindUser {
  constructor(private userId: string, private query: { [key: string]: any }) {}

  public async execute(): Promise<User> {
    const user = await User.findOrFail(this.userId);

    const { eager } = this.query;

    if (eager)
      await user.preload((preloader) =>
        preloader.preload('posts').preload('techs'),
      );

    return user;
  }
}
