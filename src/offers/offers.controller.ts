import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { OffersService } from './offers.service';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../auth/guards/jwtAuth.guard';
import { WishesService } from '../wishes/wishes.service';

@ApiTags('Offers')
@UseGuards(JwtGuard)
@Controller('offers')
export class OffersController {
  constructor(
    private readonly offersService: OffersService,
    private readonly wishService: WishesService,
  ) {}

  @Post()
  async create(@Req() req, @Body() body) {
    const { amount } = body;
    const { itemId } = body;
    const wish = await this.wishService.findOne(itemId);
    return this.offersService.create(req.user, wish, {
      amount: String(Math.floor(+amount * 100) / 100),
    });
  }

  @Get()
  findAll() {
    return this.offersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.offersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOfferDto: UpdateOfferDto) {
    return this.offersService.update(+id, updateOfferDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.offersService.remove(+id);
  }
}
