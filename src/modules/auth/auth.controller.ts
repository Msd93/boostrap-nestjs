import { Body, Controller, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LocalAuthenticationGuard } from './localAuthentication.guard';
import RequestWithUser from './requestWithUser.interface';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {

    }
    @Post()
    async register(@Body() createUser: CreateUserDto) {
        return this.authService.register(createUser);
    }
    @HttpCode(200)
    @UseGuards(LocalAuthenticationGuard)
    @Post('log-in')
    async logIn(@Req() request: RequestWithUser) {
        const user =  request.user;
        user.email = undefined;
        return user;

    }
}
