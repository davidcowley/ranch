(function () {
'use strict';

angular.module('resource')
.controller('HTListController', HTListController);


HTListController = ['HayMgrDataService', 'entries'];
function HTListController(HayMgrDataService, entries) {
  var mainList = this;
  mainList.entries = entries;
}

})();
