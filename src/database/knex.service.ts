import { Injectable } from '@nestjs/common';
import knex from 'knex';
import knexfile from 'knexfile';

@Injectable()
export class KnexService {
  private readonly _knex: any;

  constructor() {
    this._knex = knex({
      ...knexfile[process.env.APP_ENV],
    });
  }

  getKnex() {
    return this._knex;
  }
}
