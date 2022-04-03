import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

/** Interlocutor */
class Interlocutor {
  /** The interlocutor email */
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
  /** The interlocutor name */
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;
}

/** SendEmailDto */
export class SendEmailDto {
  /** The email content */
  @ApiProperty()
  @IsNotEmpty()
  readonly htmlContent: string;
  /** The email sender */
  @ApiProperty()
  @IsNotEmpty()
  readonly sender: Interlocutor;
  /** The email subject */
  @ApiProperty()
  @IsNotEmpty()
  readonly subject: string;
}
