(function () {
'use strict';

angular.module('resource')
.controller('FAListController', FAListController);


FAListController = ['HayMgrDataService', 'entries'];
function FAListController(HayMgrDataService, entries) {
  var mainList = this;
  mainList.entries = entries;
}

})();
