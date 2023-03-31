import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReproduccionDto } from './dto/create-reproduccion.dto';
import { UpdateReproduccionDto } from './dto/update-reproduccion.dto';
import { ReproduccionEntity } from './entities/reproduccion.entity';

@Injectable()
export class ReproduccionService {
  constructor(
    @InjectRepository(ReproduccionEntity)
    private reproduccionRepository: Repository<ReproduccionEntity>,
  ) {}

  async create(
    CreateReproduccionDto: CreateReproduccionDto,
  ): Promise<ReproduccionEntity> {
    const existe = await this.reproduccionRepository.findOneBy({
      nombre: CreateReproduccionDto.nombre.trim(),
      idUsuario: CreateReproduccionDto.idUsuario,
    });

    if (existe) {
      throw new ConflictException(
        `El intérprete ${CreateReproduccionDto.nombre} ya existe.`,
      );
    }

    return this.reproduccionRepository.save({
      nombre: CreateReproduccionDto.nombre.trim(),
      idUsuario: CreateReproduccionDto.idUsuario,
    });
  }

  async findAll(): Promise<ReproduccionEntity[]> {
    return this.reproduccionRepository.find();
  }

  async findOne(id: number): Promise<ReproduccionEntity> {
    const interprete = await this.reproduccionRepository.findOneBy({id});

    if (!interprete) {
      throw new NotFoundException(`El intérprete ${id} no existe.`);
    }

    return interprete;
  }

  async update(id: number, updateInterpreteDto: UpdateReproduccionDto) {
    const interprete = await this.reproduccionRepository.findOneBy({id});

    if (!interprete) {
      throw new NotFoundException(`El intérprete ${id} no existe.`);
    }

    const interpreteUpdate = Object.assign(interprete, updateInterpreteDto);
    return this.reproduccionRepository.save(interpreteUpdate);
  }

  async remove(id: number) {
    const existe = await this.reproduccionRepository.findOneBy({id});

    if (!existe) {
      throw new NotFoundException(`El intérprete ${id} no existe.`);
    }

    return this.reproduccionRepository.delete(id);
  }
}
