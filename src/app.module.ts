import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InterpreteModule } from './interprete/interprete.module';
import { GeneroModule } from './genero/genero.module';
import { AlbumModule } from './album/album.module';
import { ReproduccionModule } from './reproduccion/reproduccion.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
