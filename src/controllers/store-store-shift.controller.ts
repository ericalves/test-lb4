import { post, param, requestBody } from '@loopback/rest';
import { StoreRepository } from '../repositories/';
import { Store, Store_shift } from '../models/';
import { repository } from '@loopback/repository';

export class StoreStoreShiftsController {
  constructor(
    @repository(StoreRepository)
    protected storeRepository: StoreRepository,
  ) { }

  @post('/store/{id}/shifts')
  async createOrder(
    @param.path.number('id') id_store: typeof Store.prototype.id_store,
    @requestBody() orderData: Store_shift,
  ): Promise<Store_shift> {
    return await this.storeRepository.shifts(id_store).create(orderData);
  }
}
