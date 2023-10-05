import {
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get('forgotPWD')
  async forgetPassword(@Param('username') username: string): Promise<any> {
    const pwd = await this.authService.forgetPassword(username);
    const salt = await bcrypt.genSalt(pwd, 12);
    console.log(salt);

    // console.log(req.user);
  }
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async signIn(@Request() req): Promise<any> {
    return await this.authService.generateToken(req.user);
  }
  @UseGuards(JwtAuthGuard)
  @Get('user')
  async user(@Request() req): Promise<any> {
    return req.user;
  }
}
