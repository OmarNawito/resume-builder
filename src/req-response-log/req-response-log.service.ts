import { Inject, Injectable } from '@nestjs/common'
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter'
import { Model } from 'mongoose'
import { Log, LogDocument } from './entities/log.schema'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class ReqResLogService {
  constructor (
    private readonly eventEmiter: EventEmitter2,
    @InjectModel(Log.name) private readonly logModel: Model<LogDocument>
  ) {}

  emitEvent (event: string, data) {
    process.env.NODE_ENV !== 'test' && this.eventEmiter.emit(event, data)
  }

  @OnEvent('asyncLogging')
  listenToEvents (data: Log) {
    this.logModel.create(data)
  }
}
