import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsString, ValidateNested } from "class-validator";

export class UpdateEducationDto {
	@ValidateNested({ each: true })
  @Type(() => UpdateEducation)
  educations: UpdateEducation[];
}

export class UpdateEducation {
    @IsString()
    @IsNotEmpty()
    collegeName: string

    @IsString()
    @IsNotEmpty()
    collegeLocation: string

    @IsString()
    @IsNotEmpty()
    degree: string

    @IsString()
    @IsNotEmpty()
    major: string

    @IsString()
    @IsNotEmpty()
    gpa: string

    @IsString()
    @IsNotEmpty()
    startDate: string
    
    @IsString()
    @IsNotEmpty()
    endDate: string
}
