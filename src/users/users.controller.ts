import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('me')
  async findMe(@Req() req) {
    console.log('user = ', req);
    const n = "123";

    return n;
    // return await this.usersService.findMe({
    //   where: {  id: req.user.id },
    //   select: {
    //     username: true,
    //     about: true,
    //     avatar: true,
    //     email: true,
    //     createdAt: true,
    //     updatedAt: true,
    //   }, 
    // });
  }

  // @Get ('me/posts') 
  // async findMyPosts(        user: User): Promise<Post[]> {
  //   return await  this.posr
  // } 

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }
}
