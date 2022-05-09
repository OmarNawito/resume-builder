import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

export class UpdateExperienceDto {
  @ValidateNested({ each: true })
  @Type(() => UpdateExperience)
  experiences: UpdateExperience[];
}

export class UpdateExperience {
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @IsNotEmpty()
  jobTitle: string;

  @IsString()
  @IsNotEmpty()
  jobLocation: string;

  @IsArray()
  @IsNotEmpty()
  jobResponsibilities: string[];

  @IsString()
  @IsNotEmpty()
  startDate: string;

  @IsString()
  @IsNotEmpty()
  endDate: string;
}
