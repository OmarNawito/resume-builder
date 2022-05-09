import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import Configs from 'src/config/index';
import { DatabaseModule } from './database/database.module';
import { DatabaseService } from './database/database.service';
import { ResumeModule } from './resume/resume.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: Configs,
      ignoreEnvFile: false,
      isGlobal: true,
      cache: true,
    }),
    MongooseModule.forRootAsync({
      inject: [DatabaseService],
      imports: [DatabaseModule],
      useFactory: (databaseService: DatabaseService) =>
        databaseService.createMongooseOptions(),
    }),
    ResumeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
