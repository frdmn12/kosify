import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

@Injectable()
export class UsersService {


    findAll(){
        const users = prisma.user.findMany();

        return users;
    }

    findOne(id: number){
        const user = prisma.user.findUnique({
            where: { id },
        });
        return user;
    }

    create(newUser: { name: string; email: string; password: string }){
        const user = prisma.user.create({
            data: newUser,
        });
        return user;
    }

    update(id: number, updatedUser: { name: string; email: string; password: string }){
        const user = prisma.user.update({
            where: { id },
            data: updatedUser,
        });
        return user;
    }

    remove(id: number){
        const user = prisma.user.delete({
            where: { id },
        });
        return user;
    }

}
