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
import { EmpresaDTO } from './dto/empresa.dto';
import { EmpresaUpdateDTO } from './dto/empresa.update.dto';
import { EmpresaService } from './empresa.service';
@Controller('api/v1/empresas')
export class CompanyController {
  constructor(private readonly empresaService: EmpresaService) {}
  @UseGuards(AuthGuard('jwt'))
  @Post('add')
  async adiciona(@Body() body: EmpresaDTO) {
    return await this.empresaService.adiciona(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('listarTodos')
  async listarTodos() {
    return await this.empresaService.listarTodos();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async listarEmpresaPorId(@Param('id') id: string) {
    return await this.empresaService.listarEmpresaPorId(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/empresa/:userId')
  async listarEmpresasPorUsuarioId(@Param('userId') userId: string) {
    console.log(userId);
    return await this.empresaService.listarEmpresasPorUsuarioId(userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async atualizaEmpresa(
    @Param('id') id: string,
    @Body() body: EmpresaUpdateDTO,
  ) {
    return await this.empresaService.atualizaEmpresa(id, body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deletaEmpresa(@Param('id') id: string) {
    return await this.empresaService.deletaEmpresa(id);
  }
}
