import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class ApiTokens extends BaseSchema {
  protected tableName = 'api_tokens';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()'));
      table
        .uuid('user_id')
        .references('id')
        .inTable('users')
        .onDelete('cascade');
      table.string('name').notNullable();
      table.string('type').notNullable();
      table.string('token', 64).notNullable();
      table.timestamp('expires_at', { useTz: true });
      table.timestamp('created_at', { useTz: true }).notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
