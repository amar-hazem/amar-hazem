import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class ReplaceUserDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly _id: string;
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
  @ApiProperty()
  @IsNotEmpty()
  readonly password: string;
  @ApiProperty()
  @IsNotEmpty()
  readonly username: string;
}
