import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';

@Injectable()
export class ResourcesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createResourceDto: CreateResourceDto) {
  return this.prisma.resource.create({
    data: createResourceDto, // PAS d'objet connect
  });
  }
  
  async create(createResourceDto: CreateResourceDto) {
    const { sequenceId, ...data } = createResourceDto;
    return this.prisma.resource.create({
      data: {
        ...data,
        sequence: { connect: { id: sequenceId } }
      }
    });
  }

  async findAll() {
    return this.prisma.resource.findMany({
      include: {
        sequence: true, // pour retourner la séquence associée (optionnel)
      }
    });
  }

  async findOne(id: number) {
    return this.prisma.resource.findUnique({
      where: { id },
      include: {
        sequence: true,
      }
    });
  }

  async update(id: number, updateResourceDto: UpdateResourceDto) {
    const { sequenceId, ...data } = updateResourceDto;
    return this.prisma.resource.update({
      where: { id },
      data: {
        ...data,
        ...(sequenceId && { sequence: { connect: { id: sequenceId } } })
      }
    });
  }

  async remove(id: number) {
    return this.prisma.resource.delete({ where: { id } });
  }
}
