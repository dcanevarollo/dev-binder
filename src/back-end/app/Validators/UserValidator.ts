import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator';

export default class UserValidator {
  constructor(private ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    username: schema.string(),
    password: schema.string({}, [rules.minLength(6)]),
    bio: schema.string.optional(),
    current_job: schema.string.optional(),
    avatar_url: schema.string.optional(),
  });

  public cacheKey = this.ctx.routeKey;

  public messages = {
    required: 'O campo "{{ field }}" é obrigatório',
    'password.minLength': 'A senha deve ter, pelo menos, 6 caracteres',
  };
}
