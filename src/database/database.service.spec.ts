import { Test, TestingModule } from '@nestjs/testing';
import { KnexService } from './knex.service';

describe('DatabaseService', () => {
  let service: KnexService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KnexService],
    }).compile();

    service = module.get<KnexService>(KnexService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
