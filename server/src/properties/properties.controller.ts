import {
  Controller,
  Get,
  NotImplementedException,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { CreatePropertiesDto } from './dto/create.properties.dto';
import { UpdateUserDto } from 'src/users/dto/update.user.dto';

@Controller('properties')
export class PropertiesController {
  constructor(private propertiesService: PropertiesService) {}

  // GET ALL PROPERTIES
  @Get()
  allProperties() {
    // throw new NotImplementedException();
    return this.propertiesService.getAllProperties();
  }

  // CREATE NEW PROP
  @Post()
  create(@Body() createPropertiesDto: CreatePropertiesDto) {
    return this.propertiesService.create(createPropertiesDto);
  }

  // UPDATE PROP
  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    // throw new NotImplementedException();
    return this.propertiesService.update(+id, updateUserDto);
  }

  // REMOVE PROP
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    // throw new NotImplementedException();
    return this.propertiesService.remove(id);
  }
}
