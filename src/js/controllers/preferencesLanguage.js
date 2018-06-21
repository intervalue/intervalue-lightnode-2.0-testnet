'use strict';

//语言设置控制器
angular.module('copayApp.controllers').controller('preferencesLanguageController',
    function ($scope, $log, $timeout, configService, go, uxLanguage) {
        this.availableLanguages = uxLanguage.getLanguages();

        // 保存语言设置
        this.save = function (newLang) {
            var opts = {
                wallet: {
                    settings: {
                        defaultLanguage: newLang
                    }
                }
            };

            configService.set(opts, function (err) {
                if (err) $log.warn(err);
                $scope.$emit('Local/LanguageSettingUpdated');
                $timeout(function () {
                    go.preferencesGlobal();
                }, 100);
            });
        };
    });
