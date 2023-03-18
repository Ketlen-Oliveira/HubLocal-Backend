import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'locais' })
export class LocaisEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  companyId: string;

  @Column()
  name: string;

  @Column()
  cep: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  UF: string;
}
