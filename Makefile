VERSION=`cut -d '"' -f2 $BUILDDIR/../version.js`

cordova-base:
	grunt dist-mobile

wp8-prod:
	cordova/build.sh WP8 --clear
	cordova/wp/fix-svg.sh
	echo -e "\a"

wp8-debug:
	cordova/build.sh WP8 --dbgjs
	cordova/wp/fix-svg.sh
	echo -e "\a"

ios:
	cordova/build.sh IOS --dbgjs
	cd ../intervaluebuilds/project-IOS && cordova build ios
	open ../intervaluebuilds/project-IOS/platforms/ios/InterValue-2.0.0-testnet.xcodeproj

ios-prod:
	cordova/build.sh IOS --clear
	cd ../intervaluebuilds/project-IOS && cordova build ios

ios-debug:
	cordova/build.sh IOS --dbgjs
	cd ../intervaluebuilds/project-IOS && cordova build ios
	open ../intervaluebuilds/project-IOS/platforms/ios/InterValue-2.0.0-testnet.xcodeproj

android:
	test -d "../intervaluebuilds" || mkdir ../intervaluebuilds
	cordova/build.sh ANDROID --clear
	cd ../intervaluebuilds/project-ANDROID && cordova build android 2>&1 >/dev/null
	mv ../intervaluebuilds/project-ANDROID/platforms/android/build/outputs/apk/android-debug.apk ../intervaluebuilds/InterValue-2.0.0-testnet.apk

android-prod:
	cordova/build.sh ANDROID --clear
	cd ../intervaluebuilds/project-ANDROID && cordova build android 2>&1 >/dev/null
	mv ../intervaluebuilds/project-ANDROID/platforms/android/build/outputs/apk/android-debug.apk ../intervaluebuilds/InterValue-2.0.0-testnet.apk

android-prod-fast:
	cordova/build.sh ANDROID
#	cd ../intervaluebuilds/project-ANDROID && cordova run android --device
	cd ../intervaluebuilds/project-ANDROID && cordova build android 2>&1 >/dev/null
	mv ../intervaluebuilds/project-ANDROID/platforms/android/build/outputs/apk/android-debug.apk ../intervaluebuilds/InterValue-2.0.0-testnet.apk

android-debug:
	cordova/build.sh ANDROID --dbgjs --clear
	cd ../intervaluebuilds/project-ANDROID && cordova build android 2>&1 >/dev/null
	mv ../intervaluebuilds/project-ANDROID/platforms/android/build/outputs/apk/android-debug.apk ../intervaluebuilds/InterValue-2.0.0-testnet.apk
	cd ../intervaluebuilds && zip -r project-ANDROID.zip project-ANDROID


android-debug-fast:
	cordova/build.sh ANDROID --dbgjs
	cd ../intervaluebuilds/project-ANDROID && cordova run android --device

win32:
	grunt.cmd desktop
	cp -rf node_modules ../intervaluebuilds/InterValue-2.0.0-testnet/win32/
	grunt.cmd inno32

win64:
	grunt.cmd inno64

linux64:
	grunt desktop
	cp -rf node_modules ../intervaluebuilds/InterValue-2.0.0-testnet/linux64/
	grunt linux64

osx64:
	grunt desktop
	cp -rf node_modules ../intervaluebuilds/InterValue-2.0.0-testnet/osx64/InterValue-2.0.0-testnet.app/Contents/Resources/app.nw/
	grunt dmg