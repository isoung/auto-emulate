# Auto-Emulate

Starts an emulator with the capability to wait for the emulator to start.

## Requirements

### Android emulator requirements
* [Android SDK](https://developer.android.com/studio/index.html)
* [Android Build tools](https://developer.android.com/studio/releases/build-tools.html)
* [Java](http://www.oracle.com/technetwork/java/javase/overview/index.html)
* ANDROID_HOME set to Android sdk location (i.e. path/to/Android/sdk)
* JAVA_HOME set to Java jdk installation

## Usage
```javascript
  var autoEmulate = require('auto-emulate);

  autoEmulate.emulateAndroid({
    name: 'avd_device_name'
  });

  autoEmulate.waitForAndroidEmulator();
```

## Road Map
* Add iOS Simulator support

## Development
* [Yarn](https://yarnpkg.com/en/)
