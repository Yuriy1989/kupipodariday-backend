import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { checkHash } from '../utils/hash';
import { ILoginUser } from '../utils/types';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async auth(user: ILoginUser) {
    // const { username, id: sub } = user;
    console.log('user auth', user);
    const payload = { username: user.username, sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }

  async validatePassword(username: string, password: string) {
    const user = await this.usersService.findByUsername(username);
    console.log("validatePassword = ", user);
    const checkPassword = await checkHash(password, user.password);

    if (user && checkPassword) {
      const { password, ...result } = user;

      return result;
    }
    return null;
  }
}
