import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocationDTO } from './dto/locais.dto';
import { UpdateLocationDTO } from './dto/locais.update.dto';
import { LocaisEntity } from './locais.entity';

@Injectable()
export class LocaisService {
  constructor(
    @InjectRepository(LocaisEntity)
    private readonly locaisRepository: Repository<LocaisEntity>,
  ) {}

  async adiciona(data: CreateLocationDTO) {
    const locais = await this.locaisRepository.create(data);
    return await this.locaisRepository.save(locais);
  }

  async listarLocais() {
    return await this.locaisRepository.find({
      select: [
        'id',
        'companyId',
        'name',
        'cep',
        'street',
        'number',
        'neighborhood',
        'city',
        'UF',
      ],
    });
  }

  async listarLocalPorId(id: string) {
    try {
      return await this.locaisRepository.findOneOrFail({ where: { id: id } });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async listarLocaisPorEmpresas(companyId: string) {
    try {
      return await this.locaisRepository.find({
        where: { companyId },
      });
    } catch (error) {
      throw new NotFoundException(`Erro no código a seguir: \n\n${error}`);
    }
  }

  async listarQtdLocaisPorEmpresaId(companyId: string) {
    try {
      const locais = await this.locaisRepository.find({
        where: { companyId },
        select: ['companyId', 'name'],
      });

      return { qtd: locais.length, companyId };
    } catch (error) {
      throw new NotFoundException(`Erro no código a seguir: \n\n${error}`);
    }
  }

  async atualiza(id: string, data: UpdateLocationDTO) {
    const locais = await this.locaisRepository.findOne({ where: { id } });
    this.locaisRepository.merge(locais, data);
    return await this.locaisRepository.save(locais);
  }

  async deleta(id: string) {
    await this.locaisRepository.findOne({ where: { id: id } });
    this.locaisRepository.delete(id);
  }
}
