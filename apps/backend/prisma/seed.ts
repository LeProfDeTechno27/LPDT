import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const hash = async (pw: string) => await bcrypt.hash(pw, 10);

  // SupAdmin
  await prisma.user.upsert({
    where: { email: 'supadmin@leprofdetechno.fr' },
    update: {},
    create: {
      email: 'supadmin@leprofdetechno.fr',
      name: 'SupAdmin',
      password: await hash('supermotdepasse'), // À modifier ensuite !
      role: 'SUPADMIN'
    }
  });

  // Gestionnaire
  await prisma.user.upsert({
    where: { email: 'gestionnaire1@leprofdetechno.fr' },
    update: {},
    create: {
      email: 'gestionnaire1@leprofdetechno.fr',
      name: 'Gestionnaire 1',
      password: await hash('gestionnaire1'), // À modifier ensuite !
      role: 'GESTIONNAIRE'
    }
  });

  // Professeur
  await prisma.user.upsert({
    where: { email: 'professeur1@leprofdetechno.fr' },
    update: {},
    create: {
      email: 'professeur1@leprofdetechno.fr',
      name: 'Professeur 1',
      password: await hash('professeur1'), // À modifier ensuite !
      role: 'PROFESSEUR'
    }
  });

  // Élève (exemple, optionnel)
  await prisma.user.upsert({
    where: { email: 'eleve1@leprofdetechno.fr' },
    update: {},
    create: {
      email: 'eleve1@leprofdetechno.fr',
      name: 'Élève 1',
      password: await hash('eleve1'), // À modifier ensuite !
      role: 'ELEVE'
    }
  });
}

main()
  .then(() => {
    console.log('Seed terminé !');
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
