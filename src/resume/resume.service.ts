import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { Resume, ResumeDocument } from './entities/resume.entity';
import { ResumeModule } from './resume.module';
import { Model } from 'mongoose';


@Injectable()
export class ResumeService {
  constructor(@InjectModel(Resume.name) private resumeModel: Model<ResumeDocument>) {}

  async create(createResumeDto: CreateResumeDto) {
    try {
      const resume = new this.resumeModel(createResumeDto);
      await resume.save();
      return resume;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAll() {
    try {
      const resumes = await this.resumeModel.find();
      return resumes;
    } catch (err) {
      console.log(err.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} resume`;
  }

  update(id: number, updateResumeDto: UpdateResumeDto) {
    return `This action updates a #${id} resume`;
  }

  remove(id: number) {
    return `This action removes a #${id} resume`;
  }
}
