import { inject } from '@loopback/core';
import { juggler, AnyObject } from '@loopback/repository';
const config = require('./ds-main.datasource.json');

export class DsMainDataSource extends juggler.DataSource {
  static dataSourceName = 'dsMain';

  constructor(
    @inject('datasources.config.dsMain', { optional: true })
    dsConfig: AnyObject = config,
  ) {
    super(dsConfig)
  }
}
