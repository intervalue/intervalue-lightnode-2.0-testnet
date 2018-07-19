'use strict';

var modules = [
  'ui.router',
  'angularMoment',
  'mm.foundation',
  'monospaced.qrcode',
  'monospaced.elastic',
  'gettext',
  'ngLodash',
  'uiSwitch',
  'bwcModule',
  'copayApp.filters',
  'copayApp.services',
  'copayApp.controllers',
  'copayApp.directives',
  'copayApp.addons',
  'ct.ui.router.extras',
  'ngMaterial'
];

var copayApp = window.copayApp = angular.module('copayApp', modules);

angular.module('copayApp.filters', []);
angular.module('copayApp.services', []);
angular.module('copayApp.controllers', []);
angular.module('copayApp.directives', []);
angular.module('copayApp.addons', []);

