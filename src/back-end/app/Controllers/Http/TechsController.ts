import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Tech from 'App/Models/Tech';

export default class TechsController {
  public async index({ response }: HttpContextContract) {
    const techs = (await Tech.all()).sort((tech1: Tech, tech2: Tech) => {
      const a = tech1.name.toLowerCase();
      const b = tech2.name.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;

      return 0;
    });

    return response.ok(techs);
  }
}
