import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaClient } from '@prisma/client';
import { CoursesModule } from './courses/courses.module';
import { PrismaModule } from './prisma.module';
import { SequencesModule } from './sequences/sequences.module';
import { ResourcesModule } from './resources/resources.module';

@Module({
  imports: [PrismaModule, CoursesModule, SequencesModule, ResourcesModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'PRISMA',
      useValue: new PrismaClient(),
    },
  ],
})
export class AppModule {}