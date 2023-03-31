import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('canciones')
export class CancionesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'id_lista_reproduccion' })
  idListaReproduccion: number;
  
  @Column({ name: 'id_cancion' })
  idCancion: number;

  @Column()
  fecha: Date;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;
}
