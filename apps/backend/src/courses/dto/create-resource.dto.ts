export class CreateResourceDto {
  type: string;     // "pdf", "link", "app"
  label: string;
  url: string;
  sequenceId: number; // Fait le lien avec une séquence
}