import { Strategy } from 'passport-jwt';
import { PayloadDto } from './dto/validate.dto';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: PayloadDto): Promise<{
        id: number;
        username: string;
    }>;
}
export {};
