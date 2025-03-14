import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

type AuthInput = { name: string; password: string };
type SignInData = { id: number; name: string };

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async authenticate(input: AuthInput) {
    const user = await this.validateUser(input);

    if (!user) {
      throw new UnauthorizedException();
    }

    return this.signIn(user);
  }

  async validateUser(input: AuthInput) {
    const user = await this.userService.findUserByName(input.name);
    // console.log(user)

    const isPasswordValid = await bcrypt.compare(input.password, user.password);

    if (isPasswordValid) {
      return {
        id: user.id,
        name: user.name,
      };
    }

    return null;
  }

  async signIn(user: SignInData) {
    const tokenPaylod = {
      id: user.id,
      name: user.name,
    };

    const accessToken = await this.jwtService.signAsync(tokenPaylod);
    return { accessToken, name: user.name, id: user.id };
  }
}
