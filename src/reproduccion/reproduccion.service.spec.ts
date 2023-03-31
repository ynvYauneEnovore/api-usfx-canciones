import { Test, TestingModule } from '@nestjs/testing';
import { ReproduccionService } from './reproduccion.service';

describe('ReproduccionService', () => {
  let service: ReproduccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReproduccionService],
    }).compile();

    service = module.get<ReproduccionService>(ReproduccionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
