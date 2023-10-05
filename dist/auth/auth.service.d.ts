import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { PayloadDto } from './dto/validate.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<any>;
    forgetPassword(username: string): Promise<any>;
    generateToken(user: PayloadDto): Promise<{
        access_token: string;
    }>;
}
