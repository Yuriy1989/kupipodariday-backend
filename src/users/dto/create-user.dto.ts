import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id: number;

  @IsString()
  @Length(2, 30)
  username: string;

  @IsString()
  @Length(2, 30)
  about: string;

  @IsString()
  avatar: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  // @IsDate()
  // createdAt: Date;

  // @IsDate()
  // updatedAt: Date;
}
