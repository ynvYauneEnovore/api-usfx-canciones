import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCancionesDto {

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo id no debe ser vacío' })
  readonly idListaReproduccion: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo id_cancion no debe ser vacío' })
  readonly idCancion: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo fecha no debe ser vacío' })
  readonly fecha: Date;
}
