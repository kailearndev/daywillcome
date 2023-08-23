import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { Day } from './day.entity';
import { CreateDayDto } from './dto/create-day.dto';
export declare class DayService {
    private dayRepository;
    private userRepository;
    constructor(dayRepository: Repository<Day>, userRepository: Repository<User>);
    getAllDate(): Promise<Day[]>;
    getDateById(id: number): Promise<Day>;
    createDate(day: CreateDayDto, user: User): Promise<Day>;
    updateDate(id: number, day: CreateDayDto): Promise<Day>;
    deleteDate(id: number): Promise<void>;
}
