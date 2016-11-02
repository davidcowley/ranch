(function () {
"use strict";

angular.module('common')
.service('HayMgrDataService', HayMgrDataService);


HayMgrDataService.$inject = ['$http', 'ApiPath'];
function HayMgrDataService($http, ApiPath) {
  var service = this;

   // Lists
    var baleCodes = [];
    
  service.getBaleCodes = function () {
    return $http.get(ApiPath + '/bail_codes.json').then(function (response) {
      console.log('getCategories')
      console.log(response.data);
      return response.data;
    });
  };

    
//  service.getBaleCodes = function () {
//    var response = $http({
//      method: "GET",
//      //headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//      url: (ApiBasePath + "/bail_codes.json'")
//    });
//
//    return response;
//  };
   
//    service.getBaleCodeEntry = function (entryId) {
//    var config = {};
//    if (entryId) {
//      config.params = {'entryId': entryId};
//    }
//
//    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
//      return response.data;
//    });
//    };

}



})();
