import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpresaDTO } from './dto/empresa.dto';
import { EmpresaUpdateDTO } from './dto/empresa.update.dto';
import { EmpresaEntity } from './empresa.entity';

@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(EmpresaEntity)
    private readonly empresaRepository: Repository<EmpresaEntity>,
  ) {}

  async adiciona(data: EmpresaDTO) {
    const empresa = await this.empresaRepository.create(data);
    return await this.empresaRepository.save(empresa);
  }

  async listarTodos() {
    return await this.empresaRepository.find({
      select: ['id', 'userId', 'name', 'website', 'cnpj'],
    });
  }

  async listarEmpresaPorId(id: string) {
    try {
      return await this.empresaRepository.findOneOrFail({ where: { id: id } });
    } catch (error) {
      throw new NotFoundException(
        `Erro no código a seguir: \n\n${error.message}`,
      );
    }
  }

  async listarEmpresasPorUsuarioId(usuarioId) {
    try {
      return await this.empresaRepository.find({
        where: { userId: usuarioId },
      });
    } catch (error) {
      throw new NotFoundException(`Erro no código a seguir: \n\n${error}`);
    }
  }

  async atualizaEmpresa(id: string, data: EmpresaUpdateDTO) {
    const empresas = await this.empresaRepository.findOne({ where: { id } });
    this.empresaRepository.merge(empresas, data);
    return await this.empresaRepository.save(empresas);
  }

  async deletaEmpresa(id: string) {
    await this.empresaRepository.findOne({ where: { id } });
    this.empresaRepository.delete(id);
  }
}
