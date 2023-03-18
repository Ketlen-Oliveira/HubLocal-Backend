import { IsNotEmpty, IsString } from 'class-validator';

export class EmpresaDTO {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  website: string;

  @IsNotEmpty()
  @IsString()
  cnpj: string;
}
