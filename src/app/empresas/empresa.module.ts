import { Module } from '@nestjs/common';
import { CompanyController } from './empresa.controller';
import { EmpresaService } from './empresa.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaEntity } from './empresa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmpresaEntity])],
  controllers: [CompanyController],
  providers: [EmpresaService],
  exports: [EmpresaService],
})
export class EmpresaModule {}
