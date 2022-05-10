import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import Configs from './config/index';
import { DatabaseModule } from './database/database.module';
import { DatabaseService } from './database/database.service';
import { ResumeModule } from './resume/resume.module';
import { LogsModule } from './logs/logs.module';
import { WinstonModule } from 'nest-winston';
import { WinstonConfigService } from './logs/winston.service';
import { ReqResponseLogModule } from './req-response-log/req-response-log.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: Configs,
      ignoreEnvFile: false,
      isGlobal: true,
      cache: true,
    }),
    WinstonModule.forRootAsync({
      useClass: WinstonConfigService,
    }),
    LogsModule,
    MongooseModule.forRootAsync({
      inject: [DatabaseService],
      imports: [DatabaseModule],
      useFactory: (databaseService: DatabaseService) =>
        databaseService.createMongooseOptions(),
    }),
    ResumeModule,
    LogsModule,
    ReqResponseLogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
