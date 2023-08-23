import { Day } from 'src/day/day.entity';
export declare class User {
    id: number;
    username: string;
    password?: string;
    day: Day[];
}
