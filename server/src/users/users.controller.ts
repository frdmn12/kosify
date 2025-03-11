import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UsersService } from './users.service';

const prisma = new PrismaClient();

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // ROUTE LIST
  // GET /users
  // POST /users => Register Account
  // GET /users/:id
  // PUT /users/:id
  // DELETE /users/:id

  // ROUTE IMPLEMENTATION
  // GET /users
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // POST /users
  @Post()
  create(@Body() newUser: { name: string; email: string; password: string }) {
    
    return this.usersService.create(newUser);
  }
}
