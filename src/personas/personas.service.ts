import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './entities/persona.entity';

// personas (id, ci, nombres, primer_apellido, segundo_apellido, fecha_nacimiento)

@Injectable()
export class PersonasService {
  constructor(
    @InjectRepository(Persona)
    private readonly personasRepository: Repository<Persona>,
  ) {}

  create(createPersonaDto: CreatePersonaDto) {
    const persona = this.personasRepository.create(createPersonaDto);
    return this.personasRepository.save(persona);
  }

  findAll() {
    return this.personasRepository.find();
  }

  async findOne(id: number) {
    const persona = await this.personasRepository.findOneBy({ id });

    if (!persona) {
      throw new NotFoundException(`Persona con id ${id} no encontrada`);
    }

    return persona;
  }

  async update(id: number, updatePersonaDto: UpdatePersonaDto) {
    const persona = await this.findOne(id);
    this.personasRepository.merge(persona, updatePersonaDto);
    return this.personasRepository.save(persona);
  }

  async remove(id: number) {
    const persona = await this.findOne(id);
    return this.personasRepository.remove(persona);
  }
}
