import { Test, TestingModule } from '@nestjs/testing';
import { SponsorsService } from './sponsors.service.js';

describe('SponsorsService', () => {
  let service: SponsorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SponsorsService],
    }).compile();

    service = module.get<SponsorsService>(SponsorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
