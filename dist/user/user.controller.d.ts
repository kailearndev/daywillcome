import { userDto } from './dto/user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findDate(): Promise<User[]>;
    create(user: userDto): Promise<User>;
}
