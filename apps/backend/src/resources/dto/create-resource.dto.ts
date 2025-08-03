export class CreateResourceDto {
  name: string;
  url: string;
  description?: string;
  type: string;
  label: string;
  sequenceId: number;
}