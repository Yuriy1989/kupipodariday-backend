import { Injectable } from '@nestjs/common';
import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Wish } from './entities/wish.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class WishesService {
  constructor(
    @InjectRepository(Wish)
    private readonly wishRepository: Repository<Wish>,
    private usersService: UsersService,
  ) {}

  async create(user: User, createWishDto: CreateWishDto): Promise<any> {
    const wish = this.wishRepository.create({
      ...createWishDto,
      owner: user,
    });
    // console.log("wish", wish);
    const linkOnWish = this.usersService.addWish(user.id, wish);
    // console.log("linkOnWisht", linkOnWish);

    const t = this.wishRepository.save(wish);
    return t;
  }

  findAll(): Promise<Wish[]> {
    return this.wishRepository.find();
  }

  findOne(id: number): Promise<Wish> {
    return this.wishRepository.findOneBy({ id });
  }

  // update(id: number, updateWishDto: UpdateWishDto) {
  //   return this.wishRepository.update({ id }, updateWishDto);
  // }

  remove(id: number) {
    return this.wishRepository.delete({ id });
  }

  topWishes() {
    return 'topWishes';
  }

  lastWishes() {
    return 'lastWishes';
  }
}
