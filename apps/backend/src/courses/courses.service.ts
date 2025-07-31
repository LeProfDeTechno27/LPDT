import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient, Course } from '@prisma/client';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @Inject('PRISMA') private readonly prisma: PrismaClient
  ) {}

  create(createCourseDto: CreateCourseDto): Promise<Course> {
    return this.prisma.course.create({ data: createCourseDto });
  }

  findAll(): Promise<Course[]> {
    return this.prisma.course.findMany();
  }

  findOne(id: number): Promise<Course | null> {
    return this.prisma.course.findUnique({ where: { id } });
  }

  update(id: number, updateCourseDto: UpdateCourseDto): Promise<Course> {
    return this.prisma.course.update({
      where: { id },
      data: updateCourseDto
    });
  }

  remove(id: number): Promise<Course> {
    return this.prisma.course.delete({ where: { id } });
  }
}