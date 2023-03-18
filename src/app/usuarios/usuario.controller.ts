import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsuarioDTO } from './dto/usuario.dto';
import { UsuarioUpdateDTO } from './dto/usuario.update.dto';
import { UsuariosService } from './usuario.service';

@Controller('api/hub/usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
  @Post('add')
  async novoUsuario(@Body() body: UsuarioDTO) {
    return await this.usuariosService.adiciona(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('listarTodos')
  async listaUsuarios() {
    return await this.usuariosService.listarTodos();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async listaUsuarioId(@Param('id') id: string) {
    return await this.usuariosService.listaPorId(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async atualizaUsuario(
    @Param('id') id: string,
    @Body() body: UsuarioUpdateDTO,
  ) {
    return await this.usuariosService.atualizaUsuario(id, body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deletaUsuario(@Param('id') id: string) {
    return await this.usuariosService.excluiUsuario(id);
  }
}
