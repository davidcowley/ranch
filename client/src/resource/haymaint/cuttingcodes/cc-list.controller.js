(function () {
'use strict';

angular.module('resource')
.controller('CCListController', CCListController);


CCListController = ['HayMgrDataService', 'entries'];
function CCListController(HayMgrDataService, entries) {
  var mainList = this;
  mainList.entries = entries;
}

})();
