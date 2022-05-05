import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateResumeDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    address: string

    @IsString()
    @IsNotEmpty()
    telephone: string
    
    @IsString()
    @IsNotEmpty()
    summary: string
}
