'use strict';

angular.module('copayApp.controllers').controller('disclaimerController',
  function($scope, $timeout, storageService, applicationService, gettextCatalog, isCordova, uxLanguage, go, $rootScope, profileService) {
    var self = this;
	if (!isCordova && process.platform === 'win32' && navigator.userAgent.indexOf('Windows NT 5.1') >= 0)
		$rootScope.$emit('Local/ShowAlert', "Windows XP is not supported", 'fi-alert', function() {
			process.exit();
		});
	
    $scope.agree = function() {
      if (isCordova) {
        window.plugins.spinnerDialog.show(null, gettextCatalog.getString('Loading...'), true);
      }
      $scope.loading = true;
      $timeout(function() {
        storageService.setDisclaimerFlag(function(err,noWallet) {
            $timeout(function() {

                // why reload the page?
                //applicationService.restart();
                // go.walletHome();
                //splash.js  light
                self.wallet_type = 'light';
                var bLight = (self.wallet_type === 'light');	//是否轻节点
                var fs = require('fs' + '');
                if (!isCordova){
                    var desktopApp = require('intervaluecore/desktop_app.js');
                    var appDataDir = desktopApp.getAppDataDir();
                    var userConfFile = appDataDir + '/conf.json';
                    fs.writeFile(userConfFile, JSON.stringify({bLight: bLight}, null, '\t'), 'utf8', function (err) {
                        if (err)
                            throw Error('failed to write conf.json: ' + err);
                        var conf = require('intervaluecore/conf.js');
                        if (!conf.bLight)
                            throw Error("Failed to switch to light, please restart the app");
                        $timeout(function () {
                            $scope.$apply();
                        });
                    });
                }
                //splash.js   light
                //splash.js   profile
                $scope.index.splashClick=true;
                if (self.creatingProfile)		//是否完成
                    return console.log('already creating profile');
                self.creatingProfile = true;

                //设置状态标识，用于解决创建钱包生成口令后，没有进行口令校验的情况下，关闭app再次打开app可以跳过校验直接进入首页的bug
                storageService.hashaschoosen(1, function (err) {});

                $timeout(function () {
                    //首次登录,创建钱包
                    profileService.create({noWallet: noWallet}, function (err) {
                        if (err) {
                            self.creatingProfile = false;
                            $log.warn(err);
                            self.error = err;
                            $timeout(function () {
                                $scope.$apply();
                            });
                            /*$timeout(function() {
                                self.create(noWallet);
                            }, 3000);*/
                        }
                        if (isCordova)
                            window.plugins.spinnerDialog.hide();
                        go.path('createWallet');
                    });
                }, 100);
                //splash.js   profile
            }, 1000);
        });
      }, 100);
    };
    
    $scope.init = function() {
      storageService.getDisclaimerFlag(function(err, val) {
        $scope.lang = uxLanguage.currentLanguage;
        $scope.agreed = val;
        $timeout(function() {
          $scope.$digest();
        }, 1);
      });


    };
  });
