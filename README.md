InterValue’s light node is a wallet for storage and transfer of decentralized value. See http://www.inve.one/.

## Binary Downloads


Stay tuned.

## Main Features

1.	High transaction concurrency and fast confirmation.

2.	No need to download the entire data.


## Installation

Download and install [NW.js v0.21.6 LTS](https://dl.nwjs.io/v0.21.6/) and [Node.js v7.9.0](https://nodejs.org/download/release/v7.9.0/).  These versions are recommended for easiest install but newer versions will work too.  If you already have another version of Node.js installed, you can use [NVM](https://github.com/creationix/nvm) to keep both.

Clone the source:

```sh
git clone https://github.com/intervalue/intervalue-lightnode-2.0-testnet.git
cd intervalue
```



Install [bower](http://bower.io/) and [grunt](http://gruntjs.com/getting-started) if you haven't already:

```sh
npm install -g bower
npm install -g grunt-cli
```

Build InterValue:

```sh
bower install
npm install
grunt
```
If you are on Windows or using NW.js and Node.js versions other than recommended, see [NW.js instructions about building native modules](http://docs.nwjs.io/en/latest/For%20Users/Advanced/Use%20Native%20Node%20Modules/).

After first run, you'll likely encounter runtime error complaining about node_sqlite3.node not being found, copy the file from the neighboring directory to where the program tries to find it, and run again. (e.g. from `intervalue/node_modules/sqlite3/lib/binding/node-v51-darwin-x64` to `intervalue/node_modules/sqlite3/lib/binding/node-webkit-v0.21.6-darwin-x64`)

Then run InterValue desktop client:

```sh
/path/to/your/nwjs/nwjs .
```

## Build InterValue App Bundles

All app bundles will be placed at `../intervaluebuilds` dir, so create it first: `mkdir -p ../intervaluebuilds`


### Android

- Install Android SDK

- `npm install babel-cli@6.26.0 -g`
- Run `make android-debug`
-	In case of could not find gradle wrapper within android sdk error, download Android SDK tools package v25:
-	http://dl-ssl.google.com/android/repository/tools_r25.2.5-macosx.zip
-	http://dl-ssl.google.com/android/repository/tools_r25.2.5-windows.zip
-   and extract to android_sdk_folder/ (should replace ./tools folder).


### iOS

- Install Xcode 7 (or newer)
- Install Cordova 6 `npm install cordova@6 -g`
- Run `make ios-debug`
  * In case of ios-deploy missing error: `npm install -g ios-deploy`
  * In case of `DeviceSupport` missing error, run `cd /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/DeviceSupport/ && sudo ln -s 10.3.1\ \(14E8301\)/ 10.3`
  * If you encounter 'bitcore' not found after app launch, install it also `npm install bitcore-lib` and remove `../intervaluebuilds/project-IOS` folder completely, then rerun make again.
  * On code signing error, open Xcode project `../intervaluebuilds/project-IOS/platforms/ios/InterValue.xcodeproj` in Xcode, open project properties, select InterValue target and set your AppleID account as a team. Xcode may also ask you to change bundle identifier to be unique, just append any random string to 'org.intervalue.wallet' bundle identifier.

### macOS

- `make osx64`

### Windows

- `install visual studio2015`

    * Setting environment variables: `C:\Program Files (x86)\Microsoft Visual Studio 14.0\VC\bin`

- `nmake win64`

### Linux

- `make linux64`


## About InterValue

InterValue is an infrastructure of Blockchain 4.0 with features such as DAG enhanced data structure, HashNet Concensus, full functions supported, high-performance, easy to use, friendly user experience, scalability. 

## Delete cash files



* macOS: `~/Library/Application Support/intervalue`
* Linux: `~/.config/intervalue`
* Windows: `%LOCALAPPDATA%\intervalue`


## Translations

InterValue uses standard gettext PO files for translations and [Crowdin](https://crowdin.com/project/intervalue) as the front-end tool for translators. To join our team of translators, please create an account at [Crowdin](https://crowdin.com) and translate the InterValue documentation and application text into your native language.

To download and build using the latest translations from Crowdin, please use the following commands:

```sh
cd i18n
node crowdin_download.js
```

This will download all partial and complete language translations while also cleaning out any untranslated ones.


## Support

* [GitHub Issues]( https://github.com/intervalue/intervalue-lightnode-2.0-testnet/issues)
  * Open an issue if you are having problems with this project
* [Email Support](mailto:intervalue@inve.one)

## Credits

The GUI is based on [Copay](https://github.com/bitpay/copay), the most beautiful and easy to use Bitcoin wallet.

## License

MIT.
