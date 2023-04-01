import { Module } from '@nestjs/common';
import { CancionesService } from './canciones.service';
import { CancionesController } from './canciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CancionesEntity } from './entities/canciones.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CancionesEntity])],
  controllers: [CancionesController],
  providers: [CancionesService],
})
export class CancionesModule {}
