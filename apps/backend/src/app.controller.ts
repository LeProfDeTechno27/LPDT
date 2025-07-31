import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaClient } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('PRISMA') private readonly prisma: PrismaClient
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('courses')
  async getCourses() {
    return this.prisma.course.findMany();
  }
}