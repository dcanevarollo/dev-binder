import { DateTime } from 'luxon';
import {
  BaseModel,
  column,
  belongsTo,
  BelongsTo,
  manyToMany,
  ManyToMany,
  computed,
} from '@ioc:Adonis/Lucid/Orm';
import User from './User';

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column({ serializeAs: null })
  public userId: string;

  @belongsTo(() => User)
  public author: BelongsTo<typeof User>;

  @column()
  public title: string;

  @column()
  public content: string;

  @column.dateTime({
    autoCreate: true,
    serialize: (value: DateTime) => {
      return {
        default: value,
        formatted: value.setLocale('pt-BR').toFormat('DDDD'),
      };
    },
  })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime;

  @manyToMany(() => User, { pivotTable: 'likes' })
  public likes: ManyToMany<typeof User>;

  @computed({ serializeAs: 'likes_count' })
  public get likesCount() {
    return Number(this.$extras.likes_count);
  }

  @computed()
  public get updated() {
    return this.createdAt < this.updatedAt;
  }
}
