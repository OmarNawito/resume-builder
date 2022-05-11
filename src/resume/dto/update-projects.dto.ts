import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator'

export class UpdateProjects {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Chat App',
    type: String
  })
  name: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Online Chat App',
    type: String
  })
  description: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'https://project.com',
    type: String
  })
  linkToProject: string

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({
    example: 'https://project.com',
    type: [String]
  })
  toolsUsed: string[]
}

export class UpdateProjectsDto {
  @ValidateNested({ each: true })
  @Type(() => UpdateProjects)
  @ApiProperty({ type: [UpdateProjects] })
  projects: UpdateProjects[]
}
