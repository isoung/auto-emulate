import { ChildProcess, spawn, spawnSync } from 'child_process';
import { sleep } from 'sleep';

export const emulateAndroid = (options?: any): Promise<ChildProcess>  => {
  return new Promise((resolve, reject) => {
    const emulator = spawn('cd $ANDROID_HOME/tools && emulator', ['-avd', options.name], {
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

export const checkForAndroidEmulator = (): boolean => {
  try {
    const output = spawnSync('adb', [
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

export const waitForAndroidEmulator = (timeout?: number) => {
  const startTime = Math.round(new Date().getTime() / 1000);
  while (!checkForAndroidEmulator()) {
    sleep(1);

    const currentTime = Math.round(new Date().getTime() / 1000);
    if (timeout !== undefined && (currentTime - startTime) > timeout) {
      throw new Error('Timeout occurred while waiting for device to boot');
    }
  }
};
