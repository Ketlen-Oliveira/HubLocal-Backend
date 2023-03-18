import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioDTO } from './dto/usuario.dto';
import { UsuarioUpdateDTO } from './dto/usuario.update.dto';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async adiciona(data: UsuarioDTO) {
    const usuario = await this.usuarioRepository.create(data);
    return await this.usuarioRepository.save(usuario);
  }

  async listarTodos() {
    return await this.usuarioRepository.find({
      select: ['id', 'name', 'email'],
    });
  }

  async listaPorId(id: string) {
    try {
      return await this.usuarioRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      throw new NotFoundException(
        `Erro no código a seguir: \n\n${error.message}`,
      );
    }
  }

  async atualizaUsuario(id: string, data: UsuarioUpdateDTO) {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });
    this.usuarioRepository.merge(usuario, data);
    return await this.usuarioRepository.save(usuario);
  }

  async excluiUsuario(id: string) {
    await this.usuarioRepository.findOne({ where: { id } });
    this.usuarioRepository.delete(id);
  }

  async listaPorEmail(email: string) {
    const usuario = await this.usuarioRepository.findOneOrFail({
      where: { email },
    });
    return usuario;
  }
}
