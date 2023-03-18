import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'empresas' })
export class EmpresaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  name: string;

  @Column()
  website: string;

  @Column()
  cnpj: string;
}
