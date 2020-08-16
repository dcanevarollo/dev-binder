import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Likes extends BaseSchema {
  protected tableName = 'likes';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('post_id')
        .references('id')
        .inTable('posts')
        .onUpdate('cascade')
        .onDelete('cascade');
      table
        .uuid('user_id')
        .references('id')
        .inTable('users')
        .onUpdate('cascade')
        .onDelete('cascade');
      table.primary(['post_id', 'user_id']);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
