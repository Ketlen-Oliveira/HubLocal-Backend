import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateLocationDTO } from './dto/locais.dto';
import { UpdateLocationDTO } from './dto/locais.update.dto';
import { LocaisService } from './locais.service';

@Controller('api/v1/locais')
@UseGuards(AuthGuard('jwt'))
export class LocaisController {
  constructor(private readonly locaisService: LocaisService) {}
  @Post('add')
  async adiciona(@Body() body: CreateLocationDTO) {
    return await this.locaisService.adiciona(body);
  }

  @Get('listarTodos')
  async listarLocais() {
    return await this.locaisService.listarLocais();
  }
  @Get(':id')
  async listarLocalPorId(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.locaisService.listarLocalPorId(id);
  }

  @Get('/local/:empresaId')
  async listarLocaisPorEmpresas(@Param('empresaId') companyId: string) {
    return await this.locaisService.listarLocaisPorEmpresas(companyId);
  }

  @Get('/qtd/local/:empresaId')
  async listarQtdLocaisPorEmpresaId(@Param('empresaId') companyId: string) {
    return await this.locaisService.listarQtdLocaisPorEmpresaId(companyId);
  }

  @Put(':id')
  async atualiza(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateLocationDTO,
  ) {
    return await this.locaisService.atualiza(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleta(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.locaisService.deleta(id);
  }
}
