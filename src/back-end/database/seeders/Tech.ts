import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Database from '@ioc:Adonis/Lucid/Database';
import Tech from 'App/Models/Tech';

const techs: { name: string }[] = [
  { name: 'Adonis' },
  { name: 'Node' },
  { name: 'Express' },
  { name: 'React' },
  { name: 'React Native' },
  { name: 'Redux' },
  { name: 'Angular' },
  { name: 'NPM' },
  { name: 'Yarn' },
  { name: 'Spring' },
  { name: 'Hibernate' },
  { name: 'Lombok' },
  { name: 'Maven' },
  { name: 'PostgreSQL' },
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'DOM' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'Java' },
  { name: 'Python' },
  { name: 'C' },
  { name: 'jQuery' },
  { name: 'JSP' },
  { name: 'Thymeleaf' },
  { name: 'Git' },
  { name: 'SVN' },
  { name: 'MVC' },
  { name: 'REST' },
];

export default class TechSeeder extends BaseSeeder {
  public async run() {
    await Database.transaction(async (transaction) => {
      await Tech.updateOrCreateMany('name', techs, transaction);
    });
  }
}
