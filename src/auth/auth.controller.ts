import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginUserDto } from '../users/dto/login-user.dto';

@Controller('')
export class AuthController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  // @UseGuards(LocalGuard)
  @Post('signin')
  signin(@Req() req, @Body() loginUserDto: LoginUserDto) {
    console.log('req', req.user);
    console.log('loginUserDto', loginUserDto);
    return this.authService.auth(loginUserDto);
  }

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    const user = this.usersService.create(createUserDto);
    return this.authService.auth(await user);
  }
}
