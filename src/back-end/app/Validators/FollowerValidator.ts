import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator';

export default class FollowerValidator {
  constructor(private ctx: HttpContextContract) {}

  public schema = schema.create({
    user_id: schema.string({}, [
      rules.uuid({ version: 4 }),
      rules.exists({ table: 'users', column: 'id' }),
    ]),
  });

  public cacheKey = this.ctx.routeKey;

  public messages = {
    required: 'O campo user_id é obrigatório',
    uuid: 'Forneça um id válido',
    exists: 'Não existe um usuário com o id informado',
  };
}
