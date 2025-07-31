import { Module } from '@nestjs/common';
import { SequencesService } from './sequences.service'; // ou ResourcesService
import { SequencesController } from './sequences.controller'; // ou ResourcesController
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SequencesController], // ou ResourcesController
  providers: [SequencesService],      // ou ResourcesService
})
export class SequencesModule {} // ou ResourcesModule