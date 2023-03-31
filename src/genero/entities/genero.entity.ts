import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('generos')
export class GeneroEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  descripcion: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;
}
