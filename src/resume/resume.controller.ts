import { UpdateAwardsDto } from './dto/update-awards.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { Controller, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { UpdatePersonalDetailsDto } from './dto/update-personalDetails.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { UpdateProjectsDto } from './dto/update-projects.dto';

@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Patch('personal-details/:id')
  updatePersonalDetails(@Param('id') id: string , @Body() updatePersonalDetailsDto: UpdatePersonalDetailsDto) {
    return this.resumeService.updatePersonalDetails(id, updatePersonalDetailsDto);
  }

  @Patch('education/:id')
  updateEducation(@Param('id') id: string , @Body() updateEducationDto: UpdateEducationDto) {
    return this.resumeService.updateEducation(id, updateEducationDto);
  }

  @Patch('experience/:id')
  updateExperience(@Param('id') id: string , @Body() updateExperienceDto: UpdateExperienceDto) {
    return this.resumeService.updateExperience(id, updateExperienceDto);
  }

  @Patch('skills/:id')
  updateSkills(@Param('id') id: string , @Body() updateSkillDto: UpdateSkillDto) {
    return this.resumeService.updateSkill(id, updateSkillDto);
  }

  @Patch('projects/:id')
  updateProjects(@Param('id') id: string , @Body() updateProjectsDto: UpdateProjectsDto) {
    return this.resumeService.updateProject(id, updateProjectsDto);
  }

  @Patch('awards/:id')
  updateAwards(@Param('id') id: string , @Body() updateAwardsDto: UpdateAwardsDto) {
    return this.resumeService.updateAwards(id, updateAwardsDto);
  }

  @Get()
  findAll() {
    return this.resumeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resumeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.resumeService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resumeService.remove(+id);
  }
}
