import { Prisma } from '@configs/prisma';

interface CreateBet {
  gameName: string;
  betName: string;
  amount: number;
  odd: string;
}

export const createBet = async ({
  gameName,
  betName,
  amount,
  odd,
}: CreateBet): Promise<boolean> => {
  const game = await Prisma.game.findUnique({ where: { name: gameName } });

  if (!game) {
    throw new Error('Game not found');
  }

  await Prisma.bet.create({
    data: {
      amount,
      name: betName,
      odd,
      game_id: game.id,
    },
  });

  return true;
};
