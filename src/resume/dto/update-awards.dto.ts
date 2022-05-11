import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator'

export class UpdateAward {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Front-end Developer',
    type: String
  })
  name: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Sep 2020',
    type: String
  })
  date: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'FreeCodeCamp',
    type: String
  })
  awarder: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example:
      'Rewarded for learning and contributing to the open source community.',
    type: String
  })
  summary: string
}
export class UpdateAwardsDto {
  @ValidateNested({ each: true })
  @Type(() => UpdateAward)
  @ApiProperty({ type: [UpdateAward] })
  awards: UpdateAward[]
}
