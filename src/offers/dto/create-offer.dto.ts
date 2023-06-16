import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateOfferDto {
  @IsNumber()
  @ApiProperty({ example: '120,99' })
  amount: number;

  @IsBoolean()
  @ApiProperty({ example: 'false' })
  hidden: boolean;
}
