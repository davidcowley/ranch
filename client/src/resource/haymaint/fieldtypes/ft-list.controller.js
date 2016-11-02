(function () {
'use strict';

angular.module('resource')
.controller('FTListController', FTListController);


FTListController = ['HayMgrDataService', 'entries'];
function FTListController(HayMgrDataService, entries) {
  var mainList = this;
  mainList.entries = entries;
}

})();
