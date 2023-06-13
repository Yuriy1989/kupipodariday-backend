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
    console.log('user', user);
    const payload = { sub: user.password, username: user.username };
    return { access_token: this.jwtService.sign(payload) };
  }

  async validatePassword(username: string, password: string) {
    const user = await this.usersService.findByUsername(username);
    const checkPassword = await checkHash(password, user.password);

    if (user && checkPassword) {
      const { password, ...result } = user;

      return result;
    }
    return null;
  }
}
