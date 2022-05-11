import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator'

export class UpdateExperience {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Google',
    type: String
  })
  companyName: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Software Engineer',
    type: String
  })
  jobTitle: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'SMountain View, CA',
    type: String
  })
  jobLocation: string

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Software Engineer',
    type: [String]
  })
  jobResponsibilities: string[]

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Jun 2020',
    type: String
  })
  startDate: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'May 2021',
    type: String
  })
  endDate: string
}

export class UpdateExperienceDto {
  @ValidateNested({ each: true })
  @Type(() => UpdateExperience)
  @ApiProperty({ type: [UpdateExperience] })
  experiences: UpdateExperience[]
}
