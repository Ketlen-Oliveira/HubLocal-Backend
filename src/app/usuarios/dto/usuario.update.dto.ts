import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UsuarioUpdateDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
