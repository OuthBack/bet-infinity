import { Prisma } from '@configs/prisma';

export const createGameService = async (name: string): Promise<boolean> => {
  if (await Prisma.game.findUnique({ where: { name } })) {
    throw new Error('The name has been taken');
  }

  await Prisma.game.create({ data: { name } });
  return true;
};
