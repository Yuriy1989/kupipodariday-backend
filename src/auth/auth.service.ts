import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/entities/user.entity";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private usersService: UsersService,
    ) {}

    auth(user: User) {
        const payload = { sub: user.id };

        return { access_token: this.jwtService.sign(payload) };
    }

    async validatePassword(username: string, password: string) {
        const user = await this.usersService.findByUsername(username);
    
        if (user && user.password === password) {
            const { password, ...result } = user;

            return user;
        }

        return null;
    }
}