import { UpdateAwardsDto } from './dto/update-awards.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
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
} from '@nestjs/common';
import { ResumeService } from './resume.service';
import { UpdatePersonalDetailsDto } from './dto/update-personalDetails.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { UpdateProjectsDto } from './dto/update-projects.dto';
import { createReadStream } from 'fs';
import { join } from 'path';
import { ApiResponse } from '@nestjs/swagger';

@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Patch('personal-details/:id')
  @ApiResponse({ status: 200, type: UpdatePersonalDetailsDto})
  updatePersonalDetails(
    @Param('id') id: string,
    @Body() updatePersonalDetailsDto: UpdatePersonalDetailsDto,
  ) {
    return this.resumeService.updatePersonalDetails(
      id,
      updatePersonalDetailsDto,
    );
  }

  @Patch('education/:id')
  @ApiResponse({ status: 200, type: UpdateEducationDto})
  updateEducation(
    @Param('id') id: string,
    @Body() updateEducationDto: UpdateEducationDto,
  ) {
    return this.resumeService.updateEducation(id, updateEducationDto);
  }

  @Patch('experience/:id')
  @ApiResponse({ status: 200, type: UpdateExperienceDto})
  updateExperience(
    @Param('id') id: string,
    @Body() updateExperienceDto: UpdateExperienceDto,
  ) {
    return this.resumeService.updateExperience(id, updateExperienceDto);
  }

  @Patch('skills/:id')
  @ApiResponse({ status: 200, type: UpdateSkillDto})
  updateSkills(
    @Param('id') id: string,
    @Body() updateSkillDto: UpdateSkillDto,
  ) {
    return this.resumeService.updateSkill(id, updateSkillDto);
  }

  @Patch('projects/:id')
  @ApiResponse({ status: 200, type: UpdateProjectsDto})
  updateProjects(
    @Param('id') id: string,
    @Body() updateProjectsDto: UpdateProjectsDto,
  ) {
    return this.resumeService.updateProject(id, updateProjectsDto);
  }

  @Patch('awards/:id')
  @ApiResponse({ status: 200, type: UpdateAwardsDto})
  updateAwards(
    @Param('id') id: string,
    @Body() updateAwardsDto: UpdateAwardsDto,
  ) {
    return this.resumeService.updateAwards(id, updateAwardsDto);
  }

  @Get()
  findAll() {
    return this.resumeService.findAll();
  }

  @Post()
  @Header('Content-Type', 'application/pdf')
  @Header('Content-Disposition', 'attachment; filename=resume.pdf')
  async resumePdf(
    @Body() data: { style: string; resume: string },
    @Res({ passthrough: true }) res: any,
  ) {
    await this.resumeService.resumePdf(data.style, data.resume, res);
    const f = createReadStream(join(__dirname + '/Resumes', 'resume.pdf'));
    return new StreamableFile(f);
  }
}
