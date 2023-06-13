import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';
dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private configService: ConfigService,
    private usersService: UsersService,
  ) {
    console.log('123');

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('jwt.secret') || 'jwtsecret',
    });
  }

  // async validate(jwtPayload: { sub: number }) {
  //   const user = await this.usersService.findOne(sub);

  //   if (!user) {
  //     throw new UnauthorizedException('Неверный токен пользователя');
  //   }

  //   return user;
  // }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
