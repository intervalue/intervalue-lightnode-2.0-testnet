'use strict';

// 单元设置控制器
angular.module('copayApp.controllers').controller('preferencesUnitController',
    function ($rootScope, $scope, $log, configService, go) {
        var config = configService.getSync();
        //单元名称
        this.unitName = config.wallet.settings.unitName;
        //单元选项列表
        this.unitOpts = [
            {
                name: 'bytes',
                shortName: 'INVE',
                value: 1,
                decimals: 0,
                code: 'one',
            }
            , {
                name: 'kBytes (1,000 bytes)',
                shortName: 'kB',
                value: 1000,
                decimals: 3,
                code: 'kilo',
            }
            , {
                name: 'MBytes (1,000,000 bytes)',
                shortName: 'INVE',
                value: 1000000,
                decimals: 6,
                code: 'mega',
            }
            , {
                name: 'GBytes (1,000,000,000 bytes)',
                shortName: 'GB',
                value: 1000000000,
                decimals: 9,
                code: 'giga',
            }
			, {
				name: 'TBytes (1,000,000,000,000 bytes)',
				shortName: 'TB',
				value: 1000000000000,
				decimals: 12,
				code: 'tera',
			}
			, {
				name: 'PBytes (1,000,000,000,000,000 bytes)',
				shortName: 'PB',
				value: 1000000000000000,
				decimals: 15,
				code: 'peta ',
			}
			, {
				name: 'EBytes (1,000,000,000,000,000,000 bytes)',
				shortName: 'EB',
				value: 1000000000000000000,
				decimals: 18,
				code: 'exa',
			}
        ];

        this.unitName = this.unitOpts[2].unitName;  // 设置默认单元

        //保存单元设置
        this.save = function (newUnit) {
            newUnit = this.unitOpts[2];             // 设置默认单元
            var opts = {
                wallet: {
                    settings: {
                        unitName: newUnit.shortName,
                        unitValue: newUnit.value,
                        unitDecimals: newUnit.decimals,
                        unitCode: newUnit.code,
                    }
                }
            };
            this.unitName = newUnit.shortName;

            configService.set(opts, function (err) {
                if (err) $log.warn(err);
                $scope.$emit('Local/UnitSettingUpdated');
                go.preferencesGlobal();
            });

        };

        go.onBackButton = function () {
            console.log('units backbutton');
        };
        //console.log('topbar: '+$scope.topbar);
    });
