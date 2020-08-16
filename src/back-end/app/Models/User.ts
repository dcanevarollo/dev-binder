import { DateTime } from 'luxon';
import Hash from '@ioc:Adonis/Core/Hash';
import {
  column,
  beforeSave,
  BaseModel,
  hasMany,
  HasMany,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm';
import Post from './Post';
import Tech from './Tech';

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  public name: string;

  @column()
  public username: string;

  @column()
  public password: string;

  @column()
  public rememberMeToken?: string;

  @column()
  public avatarUrl?: string;

  @column()
  public currentJob?: string;

  @column()
  public bio?: string;

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime;

  @hasMany(() => Post)
  public posts: HasMany<typeof Post>;

  @manyToMany(() => User, {
    pivotTable: 'followeds',
    pivotRelatedForeignKey: 'follower_id',
  })
  public followers: ManyToMany<typeof User>;

  @manyToMany(() => Post, { pivotTable: 'likes', serializeAs: 'liked_posts' })
  public likedPosts: ManyToMany<typeof Post>;

  @manyToMany(() => Tech)
  public techs: ManyToMany<typeof Tech>;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) user.password = await Hash.make(user.password);
  }
}
