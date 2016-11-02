(function () {
"use strict";

angular.module('admin')
.config(config);

config.$inject = ['$stateProvider', '$httpProvider'];
function config($stateProvider, $httpProvider) {
  //$httpProvider.interceptors.push('authHttpInterceptor');
  //$httpProvider.defaults.headers.common.Accept = 'application/json';

  $stateProvider

  // Contains base state that all admin states inherit
  .state('admin', {
    url: '/admin',
    abstract: true,
    templateUrl: 'src/admin/admin.html'
  });
}

})();