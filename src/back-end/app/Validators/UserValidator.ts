import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator';

export default class UserValidator {
  constructor(private ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }),
    username: schema.string({}, [
      rules.unique({ table: 'users', column: 'username' }),
    ]),
    password: schema.string({}, [rules.minLength(4)]),
  });

  public cacheKey = this.ctx.routeKey;

  public messages = {
    required: 'The {{ field }} is required to sign up',
    'username.unique': 'Username already existant',
    'password.minLength': 'The password should have, at least, 6 characters',
  };
}
