// src/sequences/sequences.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { PrismaClient, Sequence } from '@prisma/client';

@Injectable()
export class SequencesService {
  constructor(@Inject('PRISMA') private readonly prisma: PrismaClient) {}

  findAll(): Promise<Sequence[]> {
    return this.prisma.sequence.findMany();
  }

  findByCourseId(courseId: number): Promise<Sequence[]> {
    return this.prisma.sequence.findMany({
      where: { courseId }
    });
  }

  async findByLevel(level: string): Promise<Sequence[]> {
    // On va chercher tous les cours de ce niveau, puis toutes leurs séquences
    const courses = await this.prisma.course.findMany({
      where: { level }
    });
    const courseIds = courses.map(c => c.id);
    return this.prisma.sequence.findMany({
      where: { courseId: { in: courseIds } },
      orderBy: { position: 'asc' }
    });
  }

  // ... autres méthodes CRUD
}
