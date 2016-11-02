(function () {
'use strict';

angular.module('resource')
.controller('BCListController', BCListController);


BCListController.$inject = ['HayMgrDataService', 'entries'];
function BCListController(HayMgrDataService, entries) {
  var bcList = this;
  bcList.entries = entries;
}

})();
