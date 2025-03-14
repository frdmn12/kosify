import { Controller, Get, NotImplementedException, Post, Body } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { CreatePropertiesDto } from './dto/create.properties.dto';

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
  create(@Body() createPropertiesDto: CreatePropertiesDto){
    return this.propertiesService.create(createPropertiesDto)
  }
}
