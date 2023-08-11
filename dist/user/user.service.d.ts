import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    find(): Promise<User[]>;
    create(user: Partial<User>): Promise<User>;
}
