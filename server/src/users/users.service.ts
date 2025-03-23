import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  async findAll() {
    const users = await prisma.user.findMany({
      orderBy: { id: 'asc' },
    });
    return users;
  }

  async findOne(id: number) {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User not found`);
    }

    return user;
  }

  async findUserByEmail(email: string) {
    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException(`User not found`);
    }

    return user;
  }

  async create(createUserDto: CreateUserDto) {
    // check if email already exists
    const userExists = await prisma.user.findFirst({
      where: { email: createUserDto.email },
    });

    if (userExists) {
      throw new HttpException('Email already exists', HttpStatus.CONFLICT);
    }

    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(createUserDto.password , saltRound)
    
    const user = await prisma.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password: hashedPassword
      },
    });

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const findUser = await prisma.user.findUnique({
      where: { id },
    });

    if (!findUser) {
      throw new NotFoundException(`User not found`);
    }

    const user = await prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
    return user;
  }

  async remove(id: number) {
    const findUser = await prisma.user.findUnique({
      where: { id },
    });

    if (!findUser) {
      throw new NotFoundException(`User not found`);
    }

    const user = await prisma.user.delete({
      where: { id },
    });
    return user;
  }
}
