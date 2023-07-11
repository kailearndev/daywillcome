import { Test, TestingModule } from '@nestjs/testing';
import { DaytocomeController } from './daytocome.controller';

describe('DaytocomeController', () => {
  let controller: DaytocomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DaytocomeController],
    }).compile();

    controller = module.get<DaytocomeController>(DaytocomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
