import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { UsuarioEntity } from 'src/app/usuarios/usuario.entity';
import { UsuariosService } from 'src/app/usuarios/usuario.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly jwtservice: JwtService,
  ) {}

  async login(usuario) {
    const payload = {
      sub: usuario.id,
      email: usuario.email,
      name: usuario.name,
    };

    return {
      id: usuario.id,
      email: usuario.email,
      name: usuario.name,
      token: this.jwtservice.sign(payload),
    };
  }

  async validateUser(email: string, password: string) {
    let usuario: UsuarioEntity;
    try {
      usuario = await this.usuariosService.listaPorEmail(email);
    } catch (error) {
      return null;
    }

    const isPasswordValid = compareSync(password, usuario.password);
    if (!isPasswordValid) return null;

    return usuario;
  }
}
