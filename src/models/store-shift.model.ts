import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Store } from './store.model';

@model()
export class Store_shift extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id_store_shift: number;

  @belongsTo(() => Store)
  id_store: number;

  @property({
    type: 'string',
  })
  desc_store_shift?: string;

  @property({
    type: 'string',
  })
  starting_time?: string;

  @property({
    type: 'date',
    default: new Date(),
  })
  created_at: string;

  @property({
    type: 'date',
    default: new Date(),
  })
  updated_at?: string;

  @property({
    type: 'string',
    default: 'N',
  })
  use_service_charge?: string;

  @property({
    type: 'string',
    default: 0,
  })
  service_charge?: string;

  constructor(data?: Partial<Store_shift>) {
    super(data);
  }
}
