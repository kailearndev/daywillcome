import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { PayloadDto } from './dto/validate.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.getUserName(username);
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!user) {
      throw new BadRequestException('User Not Found');
    }

    if (!comparePassword) {
      throw new UnauthorizedException('Password is not valid');
    }
    return user;
  }
  async generateToken(user: PayloadDto) {
    return {
      access_token: this.jwtService.sign({
        id: user.id,
        username: user.username,
      }),
    };
  }
}
