import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}

  async create(createServiceDto: CreateServiceDto, agencyId: string) {
    return this.prisma.service.create({
      data: {
        ...createServiceDto,
        agencyId,
      },
    });
  }

  async findAll(agencyId: string) {
    return this.prisma.service.findMany({
      where: {
        agencyId,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.service.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateServiceDto: Partial<CreateServiceDto>) {
    return this.prisma.service.update({
      where: {
        id,
      },
      data: updateServiceDto,
    });
  }

  async remove(id: string) {
    return this.prisma.service.delete({
      where: {
        id,
      },
    });
  }
}
