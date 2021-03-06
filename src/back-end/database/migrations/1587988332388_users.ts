import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()'));
      table.string('name').notNullable();
      table.string('username').notNullable().unique();
      table.string('password', 180);
      table.string('remember_me_token');
      table.string('avatar_url');
      table.string('company');
      table.string('location');
      table.text('bio');
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
