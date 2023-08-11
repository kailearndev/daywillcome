import { Repository } from 'typeorm';
import { DayToCome } from './daytocome.entity';
export declare class DaytocomeService {
    private dayToComeRepository;
    constructor(dayToComeRepository: Repository<DayToCome>);
    findDate(date?: string): Promise<DayToCome[]>;
    create(dayToCome: Partial<DayToCome>): Promise<DayToCome>;
    update(id: number, day: Partial<DayToCome>): Promise<DayToCome>;
    delete(id: number): Promise<void>;
    findOne(id: number): Promise<DayToCome>;
}
