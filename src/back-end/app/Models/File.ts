import { DateTime } from 'luxon';
import {
  BaseModel,
  column,
  belongsTo,
  BelongsTo,
  computed,
} from '@ioc:Adonis/Lucid/Orm';
import Env from '@ioc:Adonis/Core/Env';
import Post from './Post';

export default class File extends BaseModel {
  @column({ isPrimary: true })
  public id: string;

  @column({ serializeAs: null })
  public postId: string;

  @belongsTo(() => Post)
  public post: BelongsTo<typeof Post>;

  @column({ serializeAs: null })
  public name: string;

  @column({ serializeAs: null })
  public type: string;

  @column({ serializeAs: null })
  public subtype: string;

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime;

  @computed()
  public get url() {
    return `${Env.get('APP_URL')}/files/${this.id}`;
  }
}
