import { createGameService } from '@services/game/create-game.service';
import chalk from 'chalk';
import { Command } from 'commander';

export const gameCommand = (program: Command): void => {
  const game = program.command('game');

  game.command('create <name>').action(async (name) => {
    const bet = await createGameService(name);

    if (!bet) {
      throw new Error('Error to create bet');
    }

    chalk.green(console.log(`"${name}" created with success`));
  });
};
