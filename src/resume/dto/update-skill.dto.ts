import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmpty, IsString, IsArray, ValidateNested } from 'class-validator'

export class UpdateSkill {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'programming',
    type: String
  })
  name: string

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({
    example: 'JavaScript',
    type: String
  })
  details: string[]
}

export class UpdateSkillDto {
  @ValidateNested({ each: true })
  @Type(() => UpdateSkill)
  @ApiProperty({ type: [UpdateSkill] })
  skills: UpdateSkill[]
}
