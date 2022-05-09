import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdatePersonalDetailsDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "Omar",
  })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "Nawito",
  })
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "Nawito",
  })
  sureName: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    example: "o_mohsen@hotmail.com",
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "6 october",
  })
  address: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "6 october",
  })
  city: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "Egypt",
  })
  country: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "01155907333",
  })
  phone: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "12345",
  })
  zipCode: string;
}
