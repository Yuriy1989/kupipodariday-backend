import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { ILoginUser } from '../utils/types';

@Controller('')
export class AuthController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @UseGuards(LocalGuard)
  @Post('signin')
  signin(@Req() req, @Body() loginUserDto: ILoginUser) {
    console.log("loginUserDto signin", loginUserDto);
    console.log("req signin", req);
    return this.authService.auth(loginUserDto);
  }

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    const user = this.usersService.create(createUserDto);
    // return this.authService.auth(await user);
    return user;
  }
}
