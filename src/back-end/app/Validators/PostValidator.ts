import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema } from '@ioc:Adonis/Core/Validator';

export default class PostValidator {
  constructor(private ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }),
    content: schema.string(),
  });

  public cacheKey = this.ctx.routeKey;

  public messages = {
    required: 'O campo {{ field }} é obrigatório',
  };
}
