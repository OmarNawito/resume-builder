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
import * as pdf from 'html-pdf-node-ts';
import { ReqResLogService } from '../req-response-log/req-response-log.service';
import { Request, Response } from 'express';

@Injectable()
export class ResumeService {
  constructor(
    @InjectModel(Resume.name) private resumeModel: Model<ResumeDocument>,
    private readonly logService: ReqResLogService,
  ) {}

  async findAll() {
    try {
      const resumes = await this.resumeModel.find();
      return resumes;
    } catch (err) {
      console.log(err.message);
    }
  }

  async findByResumeId(resumeId: string) {
    try {
      return await this.resumeModel.findOne({
        resumeId,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  async updatePersonalDetails(
    id: string,
    updatePersonalDetailsDto: UpdatePersonalDetailsDto,
    req?: Request,
  ) {
    try {
      const personalDetails = await this.resumeModel.findOneAndUpdate(
        { resumeId: id },
        { $set: updatePersonalDetailsDto },
        { upsert: true, new: true },
      );
      this.logService.emitEvent('asyncLogging', {
        resumeId: id,
        request: {
          headers: req && req.headers ? req.headers : '',
          body: req && req.body ? req.body : '',
        },
        response: { ...personalDetails },
      });
      return personalDetails;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateEducation(
    id: string,
    updateEducationDto: UpdateEducationDto,
    req?: Request,
  ) {
    try {
      const educations = await this.resumeModel.findOneAndUpdate(
        { resumeId: id },
        { $set: updateEducationDto },
        { upsert: true, new: true },
      );

      this.logService.emitEvent('asyncLogging', {
        resumeId: id,
        request: {
          headers: req && req.headers ? req.headers : '',
          body: req && req.body ? req.body : '',
        },
        response: { ...educations },
      });
      return educations;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateExperience(
    id: string,
    updateExperienceDto: UpdateExperienceDto,
    req: Request,
  ) {
    try {
      const experiences = await this.resumeModel.findOneAndUpdate(
        { resumeId: id },
        { $set: updateExperienceDto },
        { upsert: true, new: true },
      );
      this.logService.emitEvent('asyncLogging', {
        resumeId: id,
        request: {
          headers: req.headers,
          body: req.body,
        },
        response: { ...experiences },
      });
      return experiences;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateSkill(id: string, updateSkillDto: UpdateSkillDto, req: Request) {
    try {
      const skills = await this.resumeModel.findOneAndUpdate(
        { resumeId: id },
        { $set: updateSkillDto },
        { upsert: true, new: true },
      );
      this.logService.emitEvent('asyncLogging', {
        resumeId: id,
        request: {
          headers: req.headers,
          body: req.body,
        },
        response: { ...skills },
      });
      return skills;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateProject(
    id: string,
    updateProjectsDto: UpdateProjectsDto,
    req: Request,
  ) {
    try {
      const projects = await this.resumeModel.findOneAndUpdate(
        { resumeId: id },
        { $set: updateProjectsDto },
        { upsert: true, new: true },
      );
      this.logService.emitEvent('asyncLogging', {
        resumeId: id,
        request: {
          headers: req.headers,
          body: req.body,
        },
        response: { ...projects },
      });
      return projects;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async updateAwards(
    id: string,
    updateAwardsDto: UpdateAwardsDto,
    req: Request,
  ) {
    try {
      const awards = await this.resumeModel.findOneAndUpdate(
        { resumeId: id },
        { $set: updateAwardsDto },
        { upsert: true, new: true },
      );
      this.logService.emitEvent('asyncLogging', {
        resumeId: id,
        request: {
          headers: req.headers,
          body: req.body,
        },
        response: { ...awards },
      });
      return awards;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async resumePdf(style: string, resume: string, res?: Response) {
    try {
      const resumeHTML = `<html><head><style>${style}</style></head><body>${resume}</body></html>`;
      fs.writeFileSync(__dirname + '/Resumes/resume.html', resumeHTML);
      const fileData = fs.readFileSync(
        __dirname + '/Resumes/resume.html',
        'utf8',
      );
      const options: any = {
        format: 'A4',
        path: __dirname + '/Resumes/resume.pdf',
        margin: { bottom: '20px', top: '40px', left: 0, right: 0 },
      };
      const file = { content: fileData };
      return await pdf.generatePdf(file, options);
    } catch (error) {
      console.log('error', error);
      return error;
    }
  }
}
