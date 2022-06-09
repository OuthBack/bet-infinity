import clear from 'clear';
import { program } from 'commander';
import { gameCommand } from './commands/game';

clear();

function main(argv: string[]) {
  program.version('0.0.1').description("An example CLI for ordering pizza's");

  gameCommand(program);

  program.parse(argv);
}

main(process.argv);
