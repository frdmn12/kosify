import { UpdatePropertiesDto } from './dto/update.properties.dto';
import { CreatePropertiesDto } from './dto/create.properties.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
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

  // update Properties
  async update(id: number, updatePropertiesDto: UpdatePropertiesDto) {
    // check id ini ada atau ga
    const findProp = await prisma.properties.findUnique({
      where: { id },
    });

    if (!findProp) {
      throw new NotFoundException('Properties Not Found');
    }

    const properties = await prisma.properties.update({
      where: { id },
      data: updatePropertiesDto,
    });

    return properties;
  }

  // remove Properties
  async remove(id: number) {
    // check id ini ada atau ga
    const findProp = await prisma.properties.findUnique({
      where: { id },
    });

    if (!findProp) {
      throw new NotFoundException('Properties Not Found');
    }

    const properties = await prisma.properties.delete({
      where: { id },
    });

    return properties;
  }
}
