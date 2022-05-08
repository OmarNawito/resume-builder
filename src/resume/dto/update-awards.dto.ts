import { Type } from "class-transformer";
import { IsNotEmpty, IsString, ValidateNested } from "class-validator";

export class UpdateAwardsDto {
	@ValidateNested({ each: true })
  @Type(() => UpdateAward)
  awards: UpdateAward[];
}

export class UpdateAward {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    date: string

    @IsString()
    @IsNotEmpty()
    awarder: string
    
    @IsString()
    @IsNotEmpty()
    summary: string
}
