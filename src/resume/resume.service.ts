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
import * as fs from 'fs';
import * as pdf from "html-pdf-node-ts";

@Injectable()
export class ResumeService {
  constructor(
    @InjectModel(Resume.name) private resumeModel: Model<ResumeDocument>,
  ) { }

  async updatePersonalDetails(
    id: string,
    updatePersonalDetailsDto: UpdatePersonalDetailsDto,
  ) {
    try {
      return await this.resumeModel.findOneAndUpdate(
        { resumeId: id },
        { $set: updatePersonalDetailsDto },
        { upsert: true, new: true },
      );
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateEducation(id: string, updateEducationDto: UpdateEducationDto) {
    try {
      return await this.resumeModel.findOneAndUpdate(
        { resumeId: id },
        { $set: updateEducationDto },
        { upsert: true, new: true },
      );
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateExperience(id: string, updateExperienceDto: UpdateExperienceDto) {
    try {
      return await this.resumeModel.findOneAndUpdate(
        { resumeId: id },
        { $set: updateExperienceDto },
        { upsert: true, new: true },
      );
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateSkill(id: string, updateSkillDto: UpdateSkillDto) {
    try {
      return await this.resumeModel.findOneAndUpdate(
        { resumeId: id },
        { $set: updateSkillDto },
        { upsert: true, new: true },
      );
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateProject(id: string, updateProjectsDto: UpdateProjectsDto) {
    try {
      return await this.resumeModel.findOneAndUpdate(
        { resumeId: id },
        { $set: updateProjectsDto },
        { upsert: true, new: true },
      );
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateAwards(id: string, updateAwardsDto: UpdateAwardsDto) {
    try {
      return await this.resumeModel.findOneAndUpdate(
        { resumeId: id },
        { $set: updateAwardsDto },
        { upsert: true, new: true },
      );
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
  async resumePdf(style: string, resume: string, res) {
    try {
      const resumeHTML = `<html><head><style>${style}</style></head><body>${resume}</body></html>`;
      console.log('resumeHTML', resumeHTML, __dirname + '/Resumes')
      fs.writeFileSync(__dirname + '/Resumes/resume.html', resumeHTML);
      const fileData = fs.readFileSync(__dirname + '/Resumes/resume.html', 'utf8');
      const options: any = { format: 'A4', path: __dirname + "/Resumes/resume.pdf", margin: { bottom: "20px", top: "40px", left: 0, right: 0 } };
      let file = { content: fileData };
      return await pdf.generatePdf(file, options);
    } catch (error) {
      console.log('error', error)
      return error;
    }
  }
}
