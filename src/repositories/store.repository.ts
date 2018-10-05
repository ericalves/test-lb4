import {
  DefaultCrudRepository,
  juggler,
  HasManyRepositoryFactory,
  repository,
} from '@loopback/repository';
import { Store, Store_shift } from '../models';
import { DsMainDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { StoreShiftRepository } from './store-shift.repository';

export class StoreRepository extends DefaultCrudRepository<Store, typeof Store.prototype.id_store> {

  public shifts: HasManyRepositoryFactory<Store_shift, typeof Store_shift.prototype.id_store>;

  constructor(
    @inject('datasources.dsMain') dataSource: DsMainDataSource,
    @repository.getter(StoreShiftRepository)
    getStoreShiftRepository: Getter<StoreShiftRepository>,
  ) {
    super(Store, dataSource);

    this.shifts = this._createHasManyRepositoryFactoryFor(
      'shifts',
      getStoreShiftRepository,
    );
  }

}
