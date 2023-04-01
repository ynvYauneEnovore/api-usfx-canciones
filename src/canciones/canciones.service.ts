import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCancionesDto } from './dto/create-canciones.dto';
import { UpdateCancionesDto } from './dto/update-canciones.dto';
import { CancionesEntity } from './entities/canciones.entity';

@Injectable()
export class CancionesService {L
  constructor(
    @InjectRepository(CancionesEntity)
    private cancionesRepository: Repository<CancionesEntity>,
  ) {}

  async create(
    CreateCancionesDto: CreateCancionesDto,
  ): Promise<CancionesEntity> {
    const existe = await this.cancionesRepository.findOneBy({
      idListaReproduccion: CreateCancionesDto.idListaReproduccion,
      idCancion: CreateCancionesDto.idCancion,
      fecha: CreateCancionesDto.fecha,
    });

    if (existe) {
      throw new ConflictException(
        `El intérprete ${CreateCancionesDto.idListaReproduccion} ya existe.`,
      );
    }

    return this.cancionesRepository.save({
      idListaReproduccion: CreateCancionesDto.idListaReproduccion,
      idCancion: CreateCancionesDto.idCancion,
      fecha: CreateCancionesDto.fecha,
    });
  }

  async findAll(): Promise<CancionesEntity[]> {
    return this.cancionesRepository.find();
  }

  async findOne(id: number): Promise<CancionesEntity> {
    const canciones = await this.cancionesRepository.findOneBy({id});

    if (!canciones) {
      throw new NotFoundException(`El intérprete ${id} no existe.`);
    }

    return canciones;
  }

  async update(id: number, updateCancionesDto: UpdateCancionesDto) {
    const canciones = await this.cancionesRepository.findOneBy({id});

    if (!canciones) {
      throw new NotFoundException(`El intérprete ${id} no existe.`);
    }

    const cancionesUpdate = Object.assign(canciones, updateCancionesDto);
    return this.cancionesRepository.save(cancionesUpdate);
  }

  async remove(id: number) {
    const existe = await this.cancionesRepository.findOneBy({id});

    if (!existe) {
      throw new NotFoundException(`El intérprete ${id} no existe.`);
    }

    return this.cancionesRepository.delete(id);
  }
}
