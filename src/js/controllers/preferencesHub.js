'use strict';
//Hub设置
angular.module('copayApp.controllers').controller('preferencesHubController',
    function ($scope, $timeout, configService, go, autoUpdatingWitnessesList) {
        var config = configService.getSync();
        var initHubEdit = false;
        this.hub = config.hub || 'ec2-13-125-47-101.ap-northeast-2.compute.amazonaws.com/bb';     // 默认Hub设置

        this.currentAutoUpdWitnessesList = autoUpdatingWitnessesList.autoUpdate;
        $scope.autoUpdWitnessesList = autoUpdatingWitnessesList.autoUpdate;

        // 保存Hub设置
        this.save = function () {
            var self = this;
            var device = require('intervaluecore/device.js');
            var lightWallet = require('intervaluecore/light_wallet.js');
            self.hub = self.hub.replace(/^wss?:\/\//i, '').replace(/^https?:\/\//i, '');
            device.setDeviceHub(self.hub);
            lightWallet.setLightVendorHost(self.hub);
            var opts = {hub: self.hub};

            configService.set(opts, function (err) {
                if (err) {
                    $scope.$emit('Local/DeviceError', err);
                    return;
                }
                $timeout(function () {
                    go.path('preferencesGlobal');
                }, 50);
            });
            if (this.currentAutoUpdWitnessesList != $scope.autoUpdWitnessesList) {
                autoUpdatingWitnessesList.setAutoUpdate($scope.autoUpdWitnessesList);
            }
        };

        var unwatchEditHub = $scope.$watch(angular.bind(this, function () {
            return this.hub;
        }), function () {
            if (initHubEdit) {
                $scope.autoUpdWitnessesList = false;
            }
            else {
                initHubEdit = true;
            }
        });

        $scope.$on('$destroy', function () {
            unwatchEditHub();
        });
    });
