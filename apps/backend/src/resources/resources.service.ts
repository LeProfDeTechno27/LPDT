import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient, Resource } from '@prisma/client';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';

@Injectable()
export class ResourcesService {
  constructor(@Inject('PRISMA') private readonly prisma: PrismaClient) {}

  create(createResourceDto: CreateResourceDto): Promise<Resource> {
    return this.prisma.resource.create({ data: createResourceDto });
  }

  findAll(): Promise<Resource[]> {
    return this.prisma.resource.findMany();
  }

  findOne(id: number): Promise<Resource | null> {
    return this.prisma.resource.findUnique({ where: { id } });
  }

  update(id: number, updateResourceDto: UpdateResourceDto): Promise<Resource> {
    return this.prisma.resource.update({ where: { id }, data: updateResourceDto });
  }

  remove(id: number): Promise<Resource> {
    return this.prisma.resource.delete({ where: { id } });
  }
}