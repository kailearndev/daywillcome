import { Test, TestingModule } from '@nestjs/testing';
import { DaytocomeService } from './daytocome.service';

describe('DaytocomeService', () => {
  let service: DaytocomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaytocomeService],
    }).compile();

    service = module.get<DaytocomeService>(DaytocomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
