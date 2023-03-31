import { Module } from '@nestjs/common';
import { ReproduccionService } from './canciones.service';
import { ReproduccionController } from './canciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReproduccionEntity } from './entities/cancion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReproduccionEntity])],
  controllers: [ReproduccionController],
  providers: [ReproduccionService],
})
export class ReproduccionModule {}
