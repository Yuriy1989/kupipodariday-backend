import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { createHash } from '../utils/hash';
import { CreateWishDto } from '../wishes/dto/create-wish.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { password } = createUserDto;
    const hash = await createHash(password);
    const user = this.userRepository.create({
      ...createUserDto,
      password: hash,
    });
    return await this.userRepository.save(user);
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    return user;
  }

  async findMy(query: FindOneOptions<User>) {
    const user = await this.userRepository.findOneOrFail(query);
    return user;
  }

  async findByUsername(username: string) {
    const user = await this.userRepository.findOneBy({ username });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const { password } = updateUserDto;
    const user = await this.findOne(id);
    if (password) {
      updateUserDto.password = await createHash(password);
    }
    return await this.userRepository.save({ ...user, ...updateUserDto });
  }

  async addWish(id: number, createWishDto: CreateWishDto) {
    const user = await this.userRepository.findOneBy({ id });
    return true;
  }
}
