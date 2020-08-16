import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class TechUsers extends BaseSchema {
  protected tableName = 'tech_user';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('tech_id')
        .references('id')
        .inTable('techs')
        .onUpdate('cascade')
        .onDelete('cascade');
      table
        .uuid('user_id')
        .references('id')
        .inTable('users')
        .onUpdate('cascade')
        .onDelete('cascade');
      table.primary(['tech_id', 'user_id']);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
