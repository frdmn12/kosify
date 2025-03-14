import { CreatePropertiesDto } from './dto/create.properties.dto';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class PropertiesService {
  async getAllProperties() {
    const properties = await prisma.properties.findMany({
      orderBy: { id: 'asc' },
    });

    return properties;
  }

  //   create Properties
  async create(createPropertiesDto: CreatePropertiesDto) {
    const properties = await prisma.properties.create({
      data: createPropertiesDto,
    });

    return properties;
  }
}
