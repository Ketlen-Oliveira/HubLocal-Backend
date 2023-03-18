import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocaisController } from './locais.controller';
import { LocaisEntity } from './locais.entity';
import { LocaisService } from './locais.service';

@Module({
  imports: [TypeOrmModule.forFeature([LocaisEntity])],
  controllers: [LocaisController],
  providers: [LocaisService],
  exports: [LocaisService],
})
export class LocaisModule {}
