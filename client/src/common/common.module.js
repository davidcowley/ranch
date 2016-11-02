(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://cowleyranch.com') // https://cowleyranch.com  -- http://localhost:3000

.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  //$httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
