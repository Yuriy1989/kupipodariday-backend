import { IsInt, IsString, Max, Min } from 'class-validator';

export class CreateWishDto {
  @IsString()
  // @Min(1)
  // @Max(250)
  name: string;

  @IsString()
  link: string;

  @IsString()
  image: string;

  @IsInt()
  price: number;

  @IsInt()
  raised: number;

  // @IsString()
  // owner: string;

  @IsString()
  // @Min(1)
  // @Max(1014)
  description: string;

  // @IsString()
  // offers: string;

  // @IsInt()
  // copied: number;
}
