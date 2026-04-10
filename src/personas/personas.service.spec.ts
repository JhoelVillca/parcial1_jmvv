import { Test, TestingModule } from '@nestjs/testing';
import { PersonasService } from './personas.service';
import { PersonasController } from './personas.controller';
import { beforeEach } from 'node:test';

describe('PersonasService', () => {
  let service: PersonasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonasController],
      providers: [PersonasService],
    }).compile();
    service = module.get<PersonasService>(PersonasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
