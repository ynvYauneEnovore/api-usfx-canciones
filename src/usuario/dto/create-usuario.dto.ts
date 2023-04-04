import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no debe ser vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(100, {
    message: 'El campo nombre no debe ser mayor a 100 caracteres',
  })
  readonly nombres: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo clave no debe ser vacío' })
  @IsString({ message: 'El campo clave debe ser de tipo cadena' })
  readonly clave: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo email no debe ser vacío' })
  @IsString({ message: 'El campo email debe ser de tipo cadena' })
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo clave no debe ser vacío' })
  @IsString({ message: 'El campo clave debe ser de tipo cadena' })
  readonly rol: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo clave no debe ser vacío' })
  @IsString({ message: 'El campo clave debe ser de tipo cadena' })
  readonly premium: boolean;
}
