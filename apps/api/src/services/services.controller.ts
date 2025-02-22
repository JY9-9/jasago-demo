import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post(':agencyId')
  create(@Body() createServiceDto: CreateServiceDto, @Param('agencyId') agencyId: string) {
    return this.servicesService.create(createServiceDto, agencyId);
  }

  @Get('agency/:agencyId')
  findAll(@Param('agencyId') agencyId: string) {
    return this.servicesService.findAll(agencyId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceDto: Partial<CreateServiceDto>) {
    return this.servicesService.update(id, updateServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesService.remove(id);
  }
}
