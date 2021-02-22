import { Test, TestingModule } from '@nestjs/testing';
import { PersonutilsService } from './personutils.service';

describe('PersonutilsService', () => {
  let service: PersonutilsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonutilsService],
    }).compile();

    service = module.get<PersonutilsService>(PersonutilsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
