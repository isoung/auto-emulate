"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs");
var _1 = require("./../");
var args = yargs
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
_1.emulateAndroid({
    name: args.n
});
if (args.w !== undefined) {
    if (args.w === true) {
        _1.waitForAndroidEmulator();
    }
    else {
        _1.waitForAndroidEmulator(args.w);
    }
}
//# sourceMappingURL=auto-emulate.js.map