import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Extensions extends BaseSchema {
  public async up() {
    this.schema.raw('create extension if not exists "uuid-ossp";');
  }

  public async down() {
    this.schema.raw('drop extension if exists "uuid-ossp";');
  }
}
