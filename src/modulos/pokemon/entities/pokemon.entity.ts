// entities/pokemon.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  // Puedes agregar más propiedades según la estructura de tus Pokemon
  @Column({ nullable: true })
  type?: string;

  @Column({ nullable: true })
  hp?: number;

  @Column({ nullable: true })
  attack?: number;

  @Column({ nullable: true })
  defense?: number;

  @Column({ nullable: true })
  spAtk?: number;

  @Column({ nullable: true })
  spDef?: number;

  @Column({ nullable: true })
  speed?: number;

  // ... otras propiedades que desees almacenar
}