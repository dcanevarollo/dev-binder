import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Posts extends BaseSchema {
  protected tableName = 'posts';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()'));
      table
        .uuid('user_id')
        .references('id')
        .inTable('users')
        .onUpdate('cascade')
        .onDelete('cascade');
      table.string('title').notNullable();
      table.text('content').notNullable();
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
