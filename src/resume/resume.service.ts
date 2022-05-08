import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePersonalDetailsDto } from './dto/create-personalDetails.dto';
import { Resume, ResumeDocument } from './entities/resume.entity';
import { Model } from 'mongoose';
import { CreateEducationDto } from './dto/create-education.dto';


@Injectable()
export class ResumeService {
  constructor(@InjectModel(Resume.name) private resumeModel: Model<ResumeDocument>) {}

  async createPersonalDetails(id: string, CreatePersonalDetailsDto: CreatePersonalDetailsDto) {
    try {
      CreatePersonalDetailsDto.resumeId = id
      return await this.resumeModel.findOneAndUpdate({resumeId: id}, CreatePersonalDetailsDto, {upsert: true, new: true})
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async createEducation(id: string, CreateEducationDto: CreateEducationDto[]) {
    try {
      console.log('CreateEducationDto', CreateEducationDto)
      return await this.resumeModel.findOneAndUpdate({resumeId: id}, {educations: CreateEducationDto}, {upsert: true, new: true})
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

  update(id: number) {
    return `This action updates a #${id} resume`;
  }

  remove(id: number) {
    return `This action removes a #${id} resume`;
  }
}
