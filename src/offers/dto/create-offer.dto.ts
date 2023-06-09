import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateOfferDto {
    @IsNumber()
    user: number;
  
    @IsString()
    item: string;
  
    @IsNumber()
    amount: number;
  
    @IsBoolean()
    hidden: boolean;
}
