import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Followeds extends BaseSchema {
  protected tableName = 'followeds';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('user_id')
        .references('id')
        .inTable('users')
        .onUpdate('cascade')
        .onDelete('cascade');
      table
        .uuid('follower_id')
        .references('id')
        .inTable('users')
        .onUpdate('cascade')
        .onDelete('cascade');
      table.primary(['user_id', 'follower_id']);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
