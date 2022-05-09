import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsArray, ValidateNested } from 'class-validator';

export class UpdateSkillDto {
  @ValidateNested({ each: true })
  @Type(() => UpdateSkill)
  skills: UpdateSkill[];
}

export class UpdateSkill {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @IsNotEmpty()
  details: string[];
}
