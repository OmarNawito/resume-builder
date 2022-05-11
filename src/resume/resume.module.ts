import { ReqResponseLogModule } from './../req-response-log/req-response-log.module'
import { Module } from '@nestjs/common'
import { ResumeService } from './resume.service'
import { ResumeController } from './resume.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Resume, ResumeSchema } from './entities/resume.entity'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Resume.name, schema: ResumeSchema }]),
    ReqResponseLogModule
  ],
  controllers: [ResumeController],
  providers: [ResumeService]
})
export class ResumeModule {}
