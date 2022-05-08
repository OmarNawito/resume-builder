import { UpdateProjectsDto } from './dto/update-projects.dto';
import { UpdateAwardsDto } from './dto/update-awards.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UpdatePersonalDetailsDto } from './dto/update-personalDetails.dto';
import { Resume, ResumeDocument } from './entities/resume.entity';
import { Model } from 'mongoose';
import { UpdateEducationDto } from './dto/update-education.dto';


@Injectable()
export class ResumeService {
  constructor(@InjectModel(Resume.name) private resumeModel: Model<ResumeDocument>) { }

  async updatePersonalDetails(id: string, updatePersonalDetailsDto: UpdatePersonalDetailsDto) {
    try {
      return await this.resumeModel.findOneAndUpdate({ resumeId: id }, { $set: updatePersonalDetailsDto }, { upsert: true, new: true })
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateEducation(id: string, updateEducationDto: UpdateEducationDto) {
    try {
      return await this.resumeModel.findOneAndUpdate({ resumeId: id }, { $set: updateEducationDto }, { upsert: true, new: true })
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateExperience(id: string, updateExperienceDto: UpdateExperienceDto) {
    try {
      return await this.resumeModel.findOneAndUpdate({ resumeId: id }, { $set: updateExperienceDto }, { upsert: true, new: true })
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateSkill(id: string, updateSkillDto: UpdateSkillDto) {
    try {
      return await this.resumeModel.findOneAndUpdate({ resumeId: id }, { $set: updateSkillDto }, { upsert: true, new: true })
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateProject(id: string, updateProjectsDto: UpdateProjectsDto) {
    try {
      return await this.resumeModel.findOneAndUpdate({ resumeId: id }, { $set: updateProjectsDto }, { upsert: true, new: true })
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateAwards(id: string, updateAwardsDto: UpdateAwardsDto) {
    try {
      return await this.resumeModel.findOneAndUpdate({ resumeId: id }, { $set: updateAwardsDto }, { upsert: true, new: true })
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
