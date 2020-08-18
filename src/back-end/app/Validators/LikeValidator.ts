import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator';

export default class LikeValidator {
  constructor(private ctx: HttpContextContract) {}

  public schema = schema.create({
    post_id: schema.string({}, [
      rules.uuid({ version: 4 }),
      rules.exists({ table: 'posts', column: 'id' }),
    ]),
  });

  public cacheKey = this.ctx.routeKey;

  public messages = {
    required: 'O campo post_id é obrigatório',
    uuid: 'Forneça um id válido',
    exists: 'Não existe um post com o id informado',
  };
}
