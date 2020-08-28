import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator';

export default class LoginValidator {
  constructor(private ctx: HttpContextContract) {}

  public schema = schema.create({
    username: schema.string({}, [rules.requiredIfNotExists('code')]),
    password: schema.string({}, [rules.requiredIfNotExists('code')]),
    code: schema.string({}, [
      rules.requiredIfNotExistsAll(['username', 'password']),
    ]),
  });

  public cacheKey = this.ctx.routeKey;

  public messages = {
    required: 'The "{{ field }}" is required',
    requiredIfNotExistsAll: 'The {{ field }} is required',
    requiredIfNotExists: 'The {{ field }} is required',
  };
}
