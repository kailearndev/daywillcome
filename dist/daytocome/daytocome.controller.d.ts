import { DayToCome } from './daytocome.entity';
import { DaytocomeService } from './daytocome.service';
import { DateFilterDto } from './dto/datefilter.dto';
export declare class DaytocomeController {
    private readonly daytoComeService;
    constructor(daytoComeService: DaytocomeService);
    findDate(date?: DateFilterDto): Promise<DayToCome[]>;
    create(day: DayToCome): Promise<DayToCome>;
    update(id: number, day: DayToCome): Promise<any>;
    delete(id: number): Promise<any>;
    findOne(id: number): Promise<DayToCome>;
}
