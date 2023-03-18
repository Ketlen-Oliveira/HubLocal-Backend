import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EmpresaModule } from './app/empresas/empresa.module';
import { LocaisModule } from './app/locais/locais.module';
import { UsuariosModule } from './app/usuarios/usuario.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'coodesh_teste',
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true,
    } as TypeOrmModuleOptions),
    UsuariosModule,
    EmpresaModule,
    LocaisModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
