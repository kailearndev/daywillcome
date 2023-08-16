import { User } from 'src/user/user.entity';
export declare class Day {
    id: number;
    date: string;
    detail: string;
    isLate: boolean;
    user: User;
}
