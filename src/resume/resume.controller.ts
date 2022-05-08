import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { CreatePersonalDetailsDto } from './dto/create-personalDetails.dto';
import { CreateEducationDto } from './dto/create-education.dto';

@Controller('resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Patch('personal-details/:id')
  createPersonalDetails(@Param('id') id: string , @Body() CreatePersonalDetailsDto: CreatePersonalDetailsDto) {
    return this.resumeService.createPersonalDetails(id, CreatePersonalDetailsDto);
  }

  @Patch('education/:id')
  createEducation(@Param('id') id: string , @Body() CreateEducationDto: CreateEducationDto[]) {
    console.log('CreateEducationDto', CreateEducationDto)
    return this.resumeService.createEducation(id, CreateEducationDto);
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
