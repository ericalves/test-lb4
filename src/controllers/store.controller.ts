import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import { Store } from '../models';
import { StoreRepository } from '../repositories';

export class StoreController {
  constructor(
    @repository(StoreRepository)
    public storeRepository: StoreRepository,
  ) { }

  @post('/store', {
    responses: {
      '200': {
        description: 'Store model instance',
        content: { 'application/json': { 'x-ts-type': Store } },
      },
    },
  })
  async create(@requestBody() store: Store): Promise<Store> {
    console.log('estamos chegando aquiii', store)
    return await this.storeRepository.create(store);
  }




  @get('/store/count', {
    responses: {
      '200': {
        description: 'Store model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Store)) where?: Where,
  ): Promise<Count> {
    return await this.storeRepository.count(where);
  }

  @get('/store', {
    responses: {
      '200': {
        description: 'Array of Store model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Store } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Store)) filter?: Filter,
  ): Promise<Store[]> {
    return await this.storeRepository.find(filter);
  }

  @patch('/store', {
    responses: {
      '200': {
        description: 'Store PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() store: Store,
    @param.query.object('where', getWhereSchemaFor(Store)) where?: Where,
  ): Promise<Count> {
    return await this.storeRepository.updateAll(store, where);
  }

  @get('/store/{id}', {
    responses: {
      '200': {
        description: 'Store model instance',
        content: { 'application/json': { 'x-ts-type': Store } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Store> {
    return await this.storeRepository.findById(id);
  }

  @patch('/store/{id}', {
    responses: {
      '204': {
        description: 'Store PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() store: Store,
  ): Promise<void> {
    await this.storeRepository.updateById(id, store);
  }

  @del('/store/{id}', {
    responses: {
      '204': {
        description: 'Store DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.storeRepository.deleteById(id);
  }
}
