import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MongooseModule } from '@nestjs/mongoose';
import { Log, LogSchema } from './entities/log.schema';
import { ReqResLogService } from './req-response-log.service';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }]),
  ],
  providers: [ReqResLogService],
  exports: [ReqResLogService],
})
export class ReqResponseLogModule {}
