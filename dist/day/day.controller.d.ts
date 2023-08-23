import { CreateDayDto } from './dto/create-day.dto';
import { DayService } from './day.service';
import { Day } from './day.entity';
import { UserService } from 'src/user/user.service';
export declare class DayController {
    private dayService;
    private userService;
    constructor(dayService: DayService, userService: UserService);
    getAllDate(): Promise<Day[]>;
    getDateById(id: number): Promise<Day>;
    createDate(createDayDto: CreateDayDto): Promise<Day>;
    updateDate(id: number, createDayDto: CreateDayDto): Promise<Day>;
    deleteDate(id: number): Promise<void>;
}
