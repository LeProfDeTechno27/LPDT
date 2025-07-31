// src/sequences/sequences.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { SequencesService } from './sequences.service';

@Controller('sequences')
export class SequencesController {
  constructor(private readonly sequencesService: SequencesService) {}

  @Get()
  findAll(@Query('level') level?: string, @Query('courseId') courseId?: number) {
    if (level) {
      // Si on demande /sequences?level=5e
      return this.sequencesService.findByLevel(level);
    } else if (courseId) {
      // Si on demande /sequences?courseId=1
      return this.sequencesService.findByCourseId(Number(courseId));
    }
    // Sinon, retourne tout
    return this.sequencesService.findAll();
  }

  // ... les autres endpoints inchangés
}
