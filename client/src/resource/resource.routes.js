(function () {
"use strict";

angular.module('resource')
.config(config);

config.$inject = ['$stateProvider', '$httpProvider'];
function config($stateProvider, $httpProvider) {
  //$httpProvider.interceptors.push('authHttpInterceptor');
  //$httpProvider.defaults.headers.common.Accept = 'application/json';

  $stateProvider

    // Contains base state that all admin states inherit
    .state('resource', {
      url: '/resource',
      abstract: true,
      templateUrl: 'src/resource/resource.html'
    })
   // Bale Code list page
  .state('resource.balecode-list', {
    url: '/balecode-list',
    templateUrl: 'src/resource/haymaint/balecodes/bc-list.html',
    controller: 'BCListController as bcList',
    resolve: {
      entries: ['HayMgrDataService', function (HayMgrDataService) {
        return HayMgrDataService.getBaleCodes();
      }]
    }
  })
  // bale code entry
  .state('resource.balecode-list.entry', {
    // url: '/bc-entry/{entryId}',
    templateUrl: 'src/resource/haymaint/balecodes/bc-entry.html',
    controller: 'BCEntryController as bcEntry',
    params: {
      entryId: null
    }
  })
  // hay types list page
  .state('resource.haytypes-list', {
    url: '/haytypes-list',
    templateUrl: 'src/resource/haymaint/haytypes/ht-list.html',
    controller: 'HTListController as htList',
    resolve: {
      //entries: ['HayMgrDataService', function (HayMgrDataService) {
      //  return HayMgrDataService.getHayTypes();
      //}]
    }
  })
  // hay type entry
  .state('resource.haytypes-list.entry', {
    // url: '/bc-entry/{entryId}',
    templateUrl: 'src/resource/haymaint/haytypes/bc-entry.html',
    controller: 'HTEntryController as bcEntry',
    params: {
      entryId: null
    }
  })
  // cutting code list page
  .state('resource.cuttingcodes-list', {
    url: '/cuttingcodes-list',
    templateUrl: 'src/resource/haymaint/cuttingcodes/cc-list.html',
    controller: 'CCListController as ccList',
    resolve: {
      //entries: ['HayMgrDataService', function (HayMgrDataService) {
      //  return HayMgrDataService.geCuttingCodes();
      //}]
    }
  })
  // cutting codes entry
  .state('resource.cuttingcodes-list.entry', {
    // url: '/cc-entry/{entryId}',
    templateUrl: 'src/resource/haymaint/cuttingcodes/cc-entry.html',
    controller: 'CCEntryController as ccEntry',
    params: {
      entryId: null
    }
  })
  // field types list page
  .state('resource.fieldtypes-list', {
    url: '/fieldtypes-list',
    templateUrl: 'src/resource/haymaint/fieldtypes/ft-list.html',
    controller: 'FTListController as ftList',
    resolve: {
      //entries: ['HayMgrDataService', function (HayMgrDataService) {
      //  return HayMgrDataService.geCuttingCodes();
      //}]
    }
  })
  // fieldtypes entry
  .state('resource.fieldtypes-list.entry', {
    // url: '/ft-entry/{entryId}',
    templateUrl: 'src/resource/haymaint/fieldtypes/ft-entry.html',
    controller: 'FTEntryController as ftEntry',
    params: {
      entryId: null
    }
  })    
  // fields list page
  .state('resource.fields-list', {
    url: '/fields-list',
    templateUrl: 'src/resource/haymaint/fields/f-list.html',
    controller: 'FListController as fList',
    resolve: {
      //entries: ['HayMgrDataService', function (HayMgrDataService) {
      //  return HayMgrDataService.geCuttingCodes();
      //}]
    }
  })
  // fields entry
  .state('resource.fields-list.entry', {
    // url: '/ft-entry/{entryId}',
    templateUrl: 'src/resource/haymaint/fields/f-entry.html',
    controller: 'FEntryController as fEntry',
    params: {
      entryId: null
    }
  })    
  // field acres list page
  .state('resource.fieldacres-list', {
    url: '/fieldacres-list',
    templateUrl: 'src/resource/haymaint/fieldacres/fa-list.html',
    controller: 'FAListController as faList',
    resolve: {
      //entries: ['HayMgrDataService', function (HayMgrDataService) {
      //  return HayMgrDataService.geCuttingCodes();
      //}]
    }
  })
  // field acres entry
  .state('resource.fieldacres-list.entry', {
    // url: '/ft-entry/{entryId}',
    templateUrl: 'src/resource/haymaint/fieldacres/fa-entry.html',
    controller: 'FAEntryController as faEntry',
    params: {
      entryId: null
    }
  });
    
}

})();