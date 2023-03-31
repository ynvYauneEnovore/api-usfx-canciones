import { Test, TestingModule } from '@nestjs/testing';
import { ReproduccionController } from './reproduccion.controller';
import { ReproduccionService } from './reproduccion.service';

describe('ReproduccionController', () => {
  let controller: ReproduccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReproduccionController],
      providers: [ReproduccionService],
    }).compile();

    controller = module.get<ReproduccionController>(ReproduccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
