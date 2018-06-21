'use strict';

angular.module('copayApp.controllers').controller('topbarController', function($scope, $rootScope, go) {

    this.onQrCodeScanned = function(data) {
        go.handleUri(data);
    };

    this.openSendScreen = function() {
        go.send();
    };

    this.onBeforeScan = function() {
    };

    this.goHome = function() {
        $rootScope.showrightpopvalue = false;
        go.walletHome();
    };
});
