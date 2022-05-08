import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreatePersonalDetailsDto {
    @IsString()
    @IsNotEmpty()
    firstName: string

    @IsString()
    resumeId: string

    @IsString()
    @IsNotEmpty()
    lastName: string

    @IsString()
    @IsNotEmpty()
    sureName: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    address: string

    @IsString()
    @IsNotEmpty()
    city: string

    @IsString()
    @IsNotEmpty()
    country: string

    @IsString()
    @IsNotEmpty()
    phone: string
    
    @IsString()
    @IsNotEmpty()
    zipCode: string
}
