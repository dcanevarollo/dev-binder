import { IocContract } from '@adonisjs/fold';

export default class AppProvider {
  constructor(protected $container: IocContract) {}

  public register() {}

  public boot() {}

  public shutdown() {}

  public ready() {}
}
