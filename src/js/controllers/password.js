'use strict';

angular.module('copayApp.controllers').controller('passwordController',
    function ($rootScope, $scope, $timeout, profileService, notification, go, gettext) {

        var self = this;

        var pass1;

        self.isVerification = false;

        var fc = profileService.focusedClient;
        self.bHasMnemonic = (fc.credentials && fc.credentials.mnemonic);

        document.getElementById("passwordInput").focus();

        self.close = function (cb) {
            return cb(gettext('No password given'));
        };

        self.set = function (isSetup, cb) {
            self.error = false;

            if (isSetup && !self.isVerification) {
                document.getElementById("passwordInput").focus();
                self.isVerification = true;
                pass1 = self.password;
                self.password = null;
                $timeout(function () {
                    $rootScope.$apply();
                })
                return;
            }
            if (isSetup) {
                if (pass1 != self.password) {
                    self.error = gettext('Passwords do not match');
                    self.isVerification = false;
                    self.password = null;
                    pass1 = null;

                    return;
                }
            }
            return cb(null, self.password);
        };

        // // 更改代码
        // var disableCloseModal = $rootScope.$on('closeModal', function() {
        //     breadcrumbs.add('openCustomizedAmountModal: on closeModal');
        //     document.getElementsByClassName("passModalMask")[0].style.zIndex = 1099;
        //     $scope.index.askqr = false;
        //     backButton.showQrcode = false;
        //     modalInstance.dismiss('cancel');
        // });
        // // 更改代码
        // modalInstance.result.finally(function() {
        //             $rootScope.modalOpened = false;
        //             backButton.showQrcode = false;
        //             document.getElementsByClassName("passModalMask")[0].style.zIndex = 1099;
        //             $scope.index.askqr = false;
        //             disableCloseModal();
        //             var m = angular.element(document.getElementsByClassName('reveal-modal'));
        //             m.addClass(animationService.modalAnimated.slideOutDown);
        //         });
        //     };

        // 添加代码
        $rootScope.$on('closePassword', function(){
            backButton.showPassword = false;
            $scope.index.askPassword = false;
            $timeout(function () {
                $rootScope.$apply();
            });
        });
    });