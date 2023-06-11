import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { AuthService } from "./auth.service";
import { LocalGuard } from "./guards/local.guard";
import { CreateUserDto } from "src/users/dto/create-user.dto";

@Controller('auth')
export class AuthController {
    constructor(
        private userService: UsersService,
        private authService: AuthService,
    ) {}

    @UseGuards(LocalGuard)
    @Post('signin')
    signin(@Req() req) {
        return this.authService.auth(req.user);
    }
    
    @Post('signup')
    signup(@Body() createUserDto: CreateUserDto) {
        const user = this.userService.create(createUserDto);

        return this.authService.auth(user);
    }
}