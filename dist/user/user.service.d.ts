import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getAllUser(): Promise<User[]>;
    createUser(user: CreateUserDto): Promise<User>;
    updateUser(id: number, user?: UpdateUserDto): Promise<User>;
    getUserName(username: string): Promise<User>;
    getUserId(id: number): Promise<User>;
    deleteUser(id: number): Promise<void>;
}
