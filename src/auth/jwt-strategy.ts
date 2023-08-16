import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PayloadDto } from './dto/validate.dto';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: '13891381819389@asdhashdjasdhajkhdj',
    });
  }
  async validate(payload: PayloadDto) {
    return {
      id: payload.id,
      username: payload.username,
    };
  }
}
