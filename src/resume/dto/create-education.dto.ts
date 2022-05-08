import { IsNotEmpty, IsString } from "class-validator";

export class CreateEducationDto {
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
    starDate: string
    
    @IsString()
    @IsNotEmpty()
    endDate: string
}
