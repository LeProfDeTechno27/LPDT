import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
import { Resource } from '@prisma/client';

@Injectable()
export class ResourcesService {
  constructor(private prisma: PrismaService) {}

  /**
   * Crée une nouvelle ressource en se connectant à une séquence existante.
   * @param createResourceDto Les données de la ressource à créer.
   * @returns La ressource créée.
   */
  async create(createResourceDto: CreateResourceDto): Promise<Resource> {
    // Correction: on déstructure 'sequenceId' ET 'sequence'
    const { sequenceId, sequence, ...restOfData } = createResourceDto;
    return this.prisma.resource.create({
      data: {
        ...restOfData,
        // On passe la valeur numérique du champ 'sequence'
        sequence: sequence,
        // Et on connecte la relation 'Sequence'
        Sequence: {
          connect: {
            id: sequenceId,
          },
        },
      },
      include: {
        Sequence: true,
      },
    });
  }

  /**
   * Récupère toutes les ressources.
   * @returns Une liste de toutes les ressources.
   */
  async findAll(): Promise<Resource[]> {
    return this.prisma.resource.findMany({
      include: {
        Sequence: true,
      },
    });
  }

  /**
   * Récupère une seule ressource par son ID.
   * @param id L'ID de la ressource.
   * @returns La ressource correspondante ou null si elle n'existe pas.
   */
  async findOne(id: number): Promise<Resource | null> {
    return this.prisma.resource.findUnique({
      where: { id },
      include: {
        Sequence: true,
      },
    });
  }

  /**
   * Met à jour une ressource existante.
   * @param id L'ID de la ressource à mettre à jour.
   * @param updateResourceDto Les données de mise à jour.
   * @returns La ressource mise à jour.
   */
  async update(id: number, updateResourceDto: UpdateResourceDto): Promise<Resource> {
    // Correction: on déstructure 'sequenceId' ET 'sequence'
    const { sequenceId, sequence, ...restOfData } = updateResourceDto;
    return this.prisma.resource.update({
      where: { id },
      data: {
        ...restOfData,
        // On met à jour le champ 'sequence' s'il est présent
        ...(sequence !== undefined && { sequence: sequence }),
        // Et on met à jour la connexion à la relation 'Sequence' si 'sequenceId' est présent
        ...(sequenceId !== undefined && {
          Sequence: {
            connect: { id: sequenceId },
          },
        }),
      },
      include: {
        Sequence: true,
      },
    });
  }

  /**
   * Supprime une ressource.
   * @param id L'ID de la ressource à supprimer.
   * @returns La ressource supprimée.
   */
  async remove(id: number): Promise<Resource> {
    return this.prisma.resource.delete({
      where: { id },
    });
  }
}
