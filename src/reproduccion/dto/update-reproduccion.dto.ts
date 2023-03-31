import { PartialType } from '@nestjs/swagger';
import { CreateReproduccionDto } from './create-reproduccion.dto';

export class UpdateReproduccionDto extends PartialType(CreateReproduccionDto) {}
