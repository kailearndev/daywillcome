"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: '13891381819389@asdhashdjasdhajkhdj',
        });
    }
    async validate(payload) {
        return {
            id: payload.id,
            username: payload.username,
        };
    }
}
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=jwt-strategy.js.map