import { Store_shift } from './store-shift.model';
import { Entity, model, property, hasMany } from '@loopback/repository';

@model()
export class Store extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id_store: number;

  @property({
    type: 'string',
    required: true,
  })
  trade_name: string;

  @hasMany(() => Store_shift, { keyTo: 'id_store' })
  shifts?: Store_shift[];

  constructor(data?: Partial<Store>) {
    super(data);
  }
}
