import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty()
  @IsOptional()
  readonly _id: string;
  @ApiProperty()
  @IsEmail()
  @IsOptional()
  readonly email: string;
  @ApiProperty()
  @IsOptional()
  readonly password: string;
  @ApiProperty()
  @IsOptional()
  readonly username: string;
}
