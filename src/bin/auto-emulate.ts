import * as yargs from 'yargs';
import { emulateAndroid, waitForAndroidEmulator } from './../';

const args = yargs
  .usage('Usage: $0 -n [name] -t [simulator type] -w [timeout]')
  .option('name', {
    alias: 'n',
    demandOption: true,
    describe: 'simulator name'
  })
  .option('type', {
    alias: 't',
    describe: 'simulator type (i.e. android or ios)',
    type: 'string'
  })
  .option('wait', {
    alias: 'w',
    describe: 'waits for simulator to boot',
    type: 'number'
  })
  .help('help', 'displays help')
  .argv;

emulateAndroid({
  name: args.n
});

if (args.w !== undefined) {
  if (args.w === true) {
    waitForAndroidEmulator();
  }
  else {
    waitForAndroidEmulator(args.w);
  }
}
