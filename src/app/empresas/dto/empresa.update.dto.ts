import { IsNotEmpty, IsString } from 'class-validator';

export class EmpresaUpdateDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  website: string;

  @IsNotEmpty()
  @IsString()
  cnpj: string;
}
