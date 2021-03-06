import { UpdateProjectsDto } from './dto/update-projects.dto'
import { UpdateAwardsDto } from './dto/update-awards.dto'
import { UpdateSkillDto } from './dto/update-skill.dto'
import { UpdateExperienceDto } from './dto/update-experience.dto'
import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { UpdatePersonalDetailsDto } from './dto/update-personalDetails.dto'
import { Resume, ResumeDocument } from './entities/resume.entity'
import { Model } from 'mongoose'
import { UpdateEducationDto } from './dto/update-education.dto'
import * as fs from 'fs'
import * as pdf from 'html-pdf-node-ts'
import { ReqResLogService } from '../req-response-log/req-response-log.service'
import { Request, Response } from 'express'
import { IncomingHttpHeaders } from 'http'

@Injectable()
export class ResumeService {
  constructor (
    @InjectModel(Resume.name) private readonly resumeModel: Model<ResumeDocument>,
    private readonly logService: ReqResLogService
  ) {}

  async findAll () {
    return await this.resumeModel.find()
  }

  async findByResumeId (resumeId: string) {
    return await this.resumeModel.findOne({ resumeId })
  }

  async updatePersonalDetails (
    id: string,
    updatePersonalDetailsDto: UpdatePersonalDetailsDto,
    headers?: IncomingHttpHeaders,
    body?: any
  ) {
    try {
      const personalDetails = await this.resumeModel.findOneAndUpdate(
        { resumeId: id },
        { $set: updatePersonalDetailsDto },
        { upsert: true, new: true }
      )

      this.logService.emitEvent('asyncLogging', {
        resumeId: id,
        request: {
          headers,
          body
        },
        response: { ...personalDetails }
      })
      
      return personalDetails
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async updateEducation (
    id: string,
    updateEducationDto: UpdateEducationDto,
    headers?: IncomingHttpHeaders,
    body?: any
  ) {
    try {
      const educations = await this.resumeModel.findOneAndUpdate(
        { resumeId: id },
        { $set: updateEducationDto },
        { upsert: true, new: true }
      )

      this.logService.emitEvent('asyncLogging', {
        resumeId: id,
        request: {
          headers,
          body
        },
        response: { ...educations }
      })

      return educations
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async updateExperience (
    id: string,
    updateExperienceDto: UpdateExperienceDto,
    headers?: IncomingHttpHeaders,
    body?: any
  ) {
    try {
      const experiences = await this.resumeModel.findOneAndUpdate(
        { resumeId: id },
        { $set: updateExperienceDto },
        { upsert: true, new: true }
      )

      this.logService.emitEvent('asyncLogging', {
        resumeId: id,
        request: {
          headers,
          body
        },
        response: { ...experiences }
      })

      return experiences
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async updateSkill (id: string, updateSkillDto: UpdateSkillDto,headers?: IncomingHttpHeaders, body?: any) {
    try {
      const skills = await this.resumeModel.findOneAndUpdate(
        { resumeId: id },
        { $set: updateSkillDto },
        { upsert: true, new: true }
      )

      this.logService.emitEvent('asyncLogging', {
        resumeId: id,
        request: {
          headers,
          body
        },
        response: { ...skills }
      })

      return skills
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async updateProject (
    id: string,
    updateProjectsDto: UpdateProjectsDto,
    headers?: IncomingHttpHeaders,
    body?: any
  ) {
    try {
      const projects = await this.resumeModel.findOneAndUpdate(
        { resumeId: id },
        { $set: updateProjectsDto },
        { upsert: true, new: true }
      )

      this.logService.emitEvent('asyncLogging', {
        resumeId: id,
        request: {
          headers,
          body
        },
        response: { ...projects }
      })

      return projects
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async updateAwards (
    id: string,
    updateAwardsDto: UpdateAwardsDto,
    headers?: IncomingHttpHeaders,
    body?: any
  ) {
    try {
      const awards = await this.resumeModel.findOneAndUpdate(
        { resumeId: id },
        { $set: updateAwardsDto },
        { upsert: true, new: true }
      )

      this.logService.emitEvent('asyncLogging', {
        resumeId: id,
        request: {
          headers,
          body
        },
        response: { ...awards }
      })

      return awards
    } catch (error) {
      throw new InternalServerErrorException(error)
    }
  }

  async resumePdf (style: string, resume: string) {
    const resumeHTML = `<html><head><style>${style}</style></head><body>${resume}</body></html>`
    fs.writeFileSync(__dirname + '/Resumes/resume.html', resumeHTML)

    const fileData = fs.readFileSync(
      __dirname + '/Resumes/resume.html',
      'utf8'
    )
    const options: any = {
      format: 'A4',
      path: __dirname + '/Resumes/resume.pdf',
      margin: { bottom: '20px', top: '40px', left: 0, right: 0 }
    }
    const file = { content: fileData }

    return await pdf.generatePdf(file, options)
  }
}
