"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var sleep_1 = require("sleep");
exports.emulateAndroid = function (options) {
    return new Promise(function (resolve, reject) {
        var emulator = child_process_1.spawn('cd $ANDROID_HOME/tools && emulator', ['-avd', options.name], {
            detached: true,
            env: {
                ANDROID_HOME: process.env.ANDROID_HOME,
                PATH: process.env.PATH
            },
            shell: true,
            stdio: ['ignore', 'ignore', 'ignore']
        });
        emulator.unref();
        resolve(emulator);
    });
};
exports.checkForAndroidEmulator = function () {
    try {
        var output = child_process_1.spawnSync('adb', [
            'shell',
            'getprop',
            'sys.boot_completed'
        ], {
            env: {
                ANDROID_HOME: process.env.ANDROID_HOME,
                PATH: process.env.PATH
            },
            shell: true
        }).stdout.toString('utf-8');
        return (output.indexOf('1') > -1) ? true : false;
    }
    catch (err) {
        return false;
    }
};
exports.waitForAndroidEmulator = function (timeout) {
    while (!exports.checkForAndroidEmulator()) {
        sleep_1.sleep(1);
    }
};
//# sourceMappingURL=emulate.js.map