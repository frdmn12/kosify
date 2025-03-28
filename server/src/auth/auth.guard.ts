import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers.authorization;
    // console.log(authorization)
    const token = authorization?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const tokenPaylod = await this.jwtService.verifyAsync(token);

      request.user = {
        id: tokenPaylod.id,
        name: tokenPaylod.name,
      };
      return true;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
