import { DateTime } from 'luxon';
import {
  BaseModel,
  column,
  hasMany,
  HasMany,
  belongsTo,
  BelongsTo,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm';
import File from './File';
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
        formatted: value.setLocale('pt-BR').toFormat('LLL'),
      };
    },
  })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => File)
  public files: HasMany<typeof File>;

  @manyToMany(() => User, { pivotTable: 'likes' })
  public likes: ManyToMany<typeof User>;
}
