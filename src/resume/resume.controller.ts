import { UpdateAwardsDto } from './dto/update-awards.dto'
import { UpdateExperienceDto } from './dto/update-experience.dto'
import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Post,
  Res,
  StreamableFile,
  Header,
  Req
} from '@nestjs/common'
import { ResumeService } from './resume.service'
import { UpdatePersonalDetailsDto } from './dto/update-personalDetails.dto'
import { UpdateEducationDto } from './dto/update-education.dto'
import { UpdateSkillDto } from './dto/update-skill.dto'
import { UpdateProjectsDto } from './dto/update-projects.dto'
import { createReadStream } from 'fs'
import { join } from 'path'
import { ApiResponse } from '@nestjs/swagger'
import { Request } from 'express'

@Controller('resume')
export class ResumeController {
  constructor (private readonly resumeService: ResumeService) {}

  @Patch('personal-details/:id')
  @ApiResponse({ status: 200, type: UpdatePersonalDetailsDto })
  async updatePersonalDetails (
  @Param('id') id: string,
    @Body() updatePersonalDetailsDto: UpdatePersonalDetailsDto,
    @Req() req: Request
  ) {
    return await this.resumeService.updatePersonalDetails(
      id,
      updatePersonalDetailsDto,
      req
    )
  }

  @Patch('education/:id')
  @ApiResponse({ status: 200, type: UpdateEducationDto })
  async updateEducation (
  @Param('id') id: string,
    @Body() updateEducationDto: UpdateEducationDto,
    @Req() req: Request
  ) {
    return await this.resumeService.updateEducation(id, updateEducationDto, req.headers, req.body)
  }

  @Patch('experience/:id')
  @ApiResponse({ status: 200, type: UpdateExperienceDto })
  async updateExperience (
  @Param('id') id: string,
    @Body() updateExperienceDto: UpdateExperienceDto,
    @Req() req: Request
  ) {
    return await this.resumeService.updateExperience(id, updateExperienceDto, req)
  }

  @Patch('skills/:id')
  @ApiResponse({ status: 200, type: UpdateSkillDto })
  async updateSkills (
  @Param('id') id: string,
    @Body() updateSkillDto: UpdateSkillDto,
    @Req() req: Request
  ) {
    return await this.resumeService.updateSkill(id, updateSkillDto, req)
  }

  @Patch('projects/:id')
  @ApiResponse({ status: 200, type: UpdateProjectsDto })
  async updateProjects (
  @Param('id') id: string,
    @Body() updateProjectsDto: UpdateProjectsDto,
    @Req() req: Request
  ) {
    return await this.resumeService.updateProject(id, updateProjectsDto, req)
  }

  @Patch('awards/:id')
  @ApiResponse({ status: 200, type: UpdateAwardsDto })
  async updateAwards (
  @Param('id') id: string,
    @Body() updateAwardsDto: UpdateAwardsDto,
    @Req() req: Request
  ) {
    return await this.resumeService.updateAwards(id, updateAwardsDto, req)
  }

  @Get()
  async findAll () {
    return await this.resumeService.findAll()
  }

  @Get('/:id')
  async findResume (@Param('id') id: string) {
    return await this.resumeService.findByResumeId(id)
  }

  @Post()
  @Header('Content-Type', 'application/pdf')
  @Header('Content-Disposition', 'attachment; filename=resume.pdf')
  async resumePdf (
  @Body() data: { style: string, resume: string },
    @Res({ passthrough: true }) res: any
  ) {
    await this.resumeService.resumePdf(data.style, data.resume)
    const f = createReadStream(join(__dirname + '/Resumes', 'resume.pdf'))
    
    return new StreamableFile(f)
  }
}
