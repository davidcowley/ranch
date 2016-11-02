(function () {
'use strict';

angular.module('resource')
.controller('FListController', FListController);


FListController = ['HayMgrDataService', 'entries'];
function FListController(HayMgrDataService, entries) {
  var mainList = this;
  mainList.entries = entries;
}

})();
