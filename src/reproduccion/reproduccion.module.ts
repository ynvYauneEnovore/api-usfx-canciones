import { Module } from '@nestjs/common';
import { ReproduccionService } from './reproduccion.service';
import { ReproduccionController } from './reproduccion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReproduccionEntity } from './entities/reproduccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReproduccionEntity])],
  controllers: [ReproduccionController],
  providers: [ReproduccionService],
})
export class ReproduccionModule {}
