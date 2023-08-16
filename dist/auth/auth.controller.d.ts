import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(req: any): Promise<any>;
    user(req: any): Promise<any>;
}
