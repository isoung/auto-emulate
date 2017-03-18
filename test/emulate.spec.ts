import { waitForAndroidEmulator } from './../src/';

import { should } from 'chai';

describe('Emulate', () => {
  it('should successfully timeout', function() {
    this.timeout(5000);
    try {
      waitForAndroidEmulator(1);
    }
    catch (err) {
      should().equal(err.message, 'Timeout occurred while waiting for device to boot');
    }
  });
});
