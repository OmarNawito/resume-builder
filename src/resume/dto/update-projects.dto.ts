import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsString, ValidateNested } from "class-validator";

export class UpdateProjectsDto {
	@ValidateNested({ each: true })
  @Type(() => UpdateProjects)
  projects: UpdateProjects[];
}

export class UpdateProjects {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    description: string
    
    @IsString()
    @IsNotEmpty()
    linkToProject: string

    @IsArray()
    @IsNotEmpty()
    toolsUsed: String[]
}
