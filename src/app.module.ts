import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterpreteModule } from './interprete/interprete.module';
import { GeneroModule } from './genero/genero.module';
import { AlbumModule } from './album/album.module';
import { ReproduccionModule } from './reproduccion/reproduccion.module';
import { CancionesModule } from './canciones/canciones.module';
import { UsuarioModule } from './usuario/usuario.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['**/*.entity.ts'],
      synchronize: true,
      autoLoadEntities: true
    }),
    InterpreteModule,
    GeneroModule,
    AlbumModule,
    ReproduccionModule,
    CancionesModule,
    UsuarioModule,
  ],
})
export class AppModule {}
