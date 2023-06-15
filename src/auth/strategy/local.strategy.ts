import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { User } from 'src/users/entities/user.entity';
import { IUser } from 'src/utils/types';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<IUser> {
    const user = await this.authService.validatePassword(username, password);
    console.log("user validate LocalStrategy", user);

    if (!user) {
      throw new UnauthorizedException(
        'Неправильное имя пользователя или пароль',
      );
    }

    return user;
  }
}
