import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCancionDto } from './dto/create-cancion.dto';
import { UpdateCancionDto } from './dto/update-cancion.dto';
import { CancionesEntity } from './entities/cancion.entity';

@Injectable()
export class ReproduccionService {L
  constructor(
    @InjectRepository(CancionesEntity)
    private cancionesRepository: Repository<CancionesEntity>,
  ) {}

  async create(CreateCancionDto: CreateCancionDto): Promise<CancionesEntity> {
    const existe = await this.cancionesRepository.findOneBy({
      idListaReproduccion: CreateCancionDto.idListaReproduccion,
      idCancion: CreateCancionDto.idCancion,
      fecha: CreateCancionDto.fecha,
    });

    if (existe) {
      throw new ConflictException(
        `El intérprete ${CreateCancionDto.idListaReproduccion} ya existe.`,
      );
    }

    return this.cancionesRepository.save({
      idListaReproduccion: CreateCancionDto.idListaReproduccion,
      idCancion: CreateCancionDto.idCancion,
      fecha: CreateCancionDto.fecha,
    });
  }

  async findAll(): Promise<CancionesEntity[]> {
    return this.cancionesRepository.find();
  }

  async findOne(id: number): Promise<CancionesEntity> {
    const interprete = await this.cancionesRepository.findOneBy({id});

    if (!interprete) {
      throw new NotFoundException(`El intérprete ${id} no existe.`);
    }

    return interprete;
  }

  async update(id: number, updateCancionesDto: UpdateCancionDto) {
    const interprete = await this.cancionesRepository.findOneBy({id});

    if (!interprete) {
      throw new NotFoundException(`El intérprete ${id} no existe.`);
    }

    const interpreteUpdate = Object.assign(interprete, updateCancionesDto);
    return this.cancionesRepository.save(interpreteUpdate);
  }

  async remove(id: number) {
    const existe = await this.cancionesRepository.findOneBy({id});

    if (!existe) {
      throw new NotFoundException(`El intérprete ${id} no existe.`);
    }

    return this.cancionesRepository.delete(id);
  }
}
