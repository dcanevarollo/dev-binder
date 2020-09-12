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
  computed,
} from '@ioc:Adonis/Lucid/Orm';
import Post from './Post';
import Tech from './Tech';
import ApiToken from './ApiToken';

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column()
  public name: string;

  @column()
  public username: string;

  @column({ serializeAs: null })
  public password: string;

  @column({ serializeAs: null })
  public rememberMeToken?: string;

  @column()
  public avatarUrl?: string;

  @column()
  public company?: string;

  @column()
  public location?: string;

  @column()
  public bio?: string;

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime;

  @computed({ serializeAs: 'github_url' })
  public get githubUrl() {
    // Users without password means that he had registered by GitHub OAuth
    return this.password ? null : `https://github.com/${this.username}`;
  }

  @hasMany(() => Post)
  public posts: HasMany<typeof Post>;

  @manyToMany(() => User, {
    pivotTable: 'followeds',
    pivotRelatedForeignKey: 'follower_id',
  })
  public followers: ManyToMany<typeof User>;

  @manyToMany(() => User, {
    pivotTable: 'followeds',
    pivotForeignKey: 'follower_id',
    pivotRelatedForeignKey: 'user_id',
  })
  public following: ManyToMany<typeof User>;

  @manyToMany(() => Post, { pivotTable: 'likes', serializeAs: 'liked_posts' })
  public likedPosts: ManyToMany<typeof Post>;

  @manyToMany(() => Tech)
  public techs: ManyToMany<typeof Tech>;

  @hasMany(() => ApiToken)
  public tokens: HasMany<typeof ApiToken>;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.password && user.$dirty.password)
      user.password = await Hash.make(user.password);
  }

  @computed({ serializeAs: 'followers_count' })
  public get followersCount() {
    return Number(this.$extras.followers_count);
  }

  @computed({ serializeAs: 'following_count ' })
  public get followingCount() {
    return Number(this.$extras.following_count);
  }
}
