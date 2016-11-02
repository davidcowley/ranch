(function() {
"use strict";

angular.module('resource', ['ui.router', 'common'])
.run(run);

run.$inject = ['$rootScope']
function run($rootScope) {
  // Apply auth rules when state changes
  //$rootScope.$on('$stateChangeStart', AuthRedirectorService.onStateChangeStart);
}


})();