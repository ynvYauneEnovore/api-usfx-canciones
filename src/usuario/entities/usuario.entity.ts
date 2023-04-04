import { IsEmail, IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('usuario')
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  usuario: string;

  @IsNotEmpty()
  clave: string;

  @IsEmail()
  email: string;

  @UpdateDateColumn()
  rol: string;

  @UpdateDateColumn()
  premium: boolean;
}
