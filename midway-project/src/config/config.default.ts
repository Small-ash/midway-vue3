import { MidwayConfig } from '@midwayjs/core';
import path = require('path');

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1655704221368_6829',
  koa: {
    port: 7001,
  },
  orm: {
    type: 'sqlite',
    database: path.join(__dirname, '../../test.sqlite'),
    synchronize: true,
    logging: true,
  },
} as MidwayConfig;
