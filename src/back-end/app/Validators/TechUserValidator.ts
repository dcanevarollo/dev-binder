import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator';

export default class TechUserValidator {
  constructor(private ctx: HttpContextContract) {}

  public schema = schema.create({
    techs_id: schema
      .array([rules.distinct('*')])
      .members(
        schema.string({}, [
          rules.uuid({ version: 4 }),
          rules.exists({ table: 'techs', column: 'id' }),
        ]),
      ),
  });

  public cacheKey = this.ctx.routeKey;

  public messages = {
    required: 'The {{ field }} is required',
    uuid: 'Please, provide a valid uuid',
    exists: 'Tech not found',
  };
}
