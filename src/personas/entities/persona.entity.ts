import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//personas (id, ci, nombres, primer_apellido, segundo_apellido, fecha_nacimiento)

@Entity('personas')
export class Persona {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'varchar', length: 20 })
  ci: string | undefined;

  @Column({ type: 'varchar', length: 100 })
  nombres: string | undefined;

  @Column({ type: 'varchar', length: 100 })
  primer_apellido: string | undefined;

  @Column({ type: 'varchar', length: 100 })
  segundo_apellido: string | undefined;

  @Column({ type: 'date' })
  fecha_nacimiento: Date | undefined;
}