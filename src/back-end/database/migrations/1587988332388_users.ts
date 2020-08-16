import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()'));
      table.string('name').notNullable();
      table.string('username').notNullable();
      table.string('password').notNullable();
      table.string('remember_me_token');
      table.string('avatar_url');
      table.string('current_job');
      table.text('bio');
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
