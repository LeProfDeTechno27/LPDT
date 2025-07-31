export class CreateSequenceDto {
  title: string;
  position?: number;
  courseId: number; // Fait le lien avec un cours
}