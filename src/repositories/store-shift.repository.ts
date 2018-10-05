import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Store_shift } from '../models/store-shift.model';
import { DsMainDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class StoreShiftRepository extends DefaultCrudRepository<
  Store_shift,
  typeof Store_shift.prototype.id_store_shift
  > {
  constructor(
    @inject('datasources.dsMain') dataSource: DsMainDataSource,
  ) {
    super(Store_shift, dataSource);
  }
}
