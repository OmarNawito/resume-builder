import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';

export class UpdateEducation {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'MUST',
    type: String,
  })
  collegeName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Standford, CA',
    type: String,
  })
  collegeLocation: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'CS',
    type: String,
  })
  degree: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Computer Science',
    type: String,
  })
  major: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '5.5',
    type: String,
  })
  gpa: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'June 2017',
    type: String,
  })
  startDate: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'May 2021',
    type: String,
  })
  endDate: string;
}

export class UpdateEducationDto {
  @ValidateNested({ each: true })
  @Type(() => UpdateEducation)
  @ApiProperty({ type: [UpdateEducation] })
  educations: UpdateEducation[];
}
