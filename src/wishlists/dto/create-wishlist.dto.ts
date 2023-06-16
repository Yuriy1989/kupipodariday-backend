import { IsString, IsUrl, Length, MaxLength } from 'class-validator';

export class CreateWishlistDto {
  @IsString()
  @Length(1, 250)
  name: string;

  @IsString()
  @MaxLength(1500)
  description: string;

  @IsString()
  @IsUrl()
  image: string;
}
