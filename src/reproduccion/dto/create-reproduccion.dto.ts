import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateReproduccionDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo repoducción no debe ser vacío' })
  @IsString({ message: 'El campo repoducción debe ser de tipo cadena' })
  @MaxLength(100, {
    message: 'El campo repoducción no debe ser mayor a 100 caracteres',
  })
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo id no debe ser vacío' })
  readonly idUsuario: number;
}
