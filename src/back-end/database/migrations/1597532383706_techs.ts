import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Teches extends BaseSchema {
  protected tableName = 'techs';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()'));
      table.string('name').notNullable();
      table.string('icon').notNullable();
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
