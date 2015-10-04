'use strict';

var app = angular.module('app', ['ui.bootstrap', 'ui.router', 'duScroll']);

app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {

    //$locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/");

    var defaultOnEnter = function () {
        return;
    };
    var defaultOnExit = function () {
        return
    };
    var viewDirectory = './app/views/';

    $stateProvider
      .state('app', {
        url: '',
        abstract: true,
        templateUrl: viewDirectory + 'main.html'
    }).

    state('app.home', {
        url: '/',
        templateUrl: viewDirectory + 'home.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
    })

    .state('app.browsing', {
        url: '/browsing',
        templateUrl: viewDirectory + 'browsing.html',
        controller: 'BrowsingController',
        controllerAs: 'browsingCtrl'
    })

    .state('app.stylist', {
        url: '/stylist/:id',
        templateUrl: viewDirectory + 'stylist.html',
        controller: 'StylistController',
        controllerAs: 'stylistCtrl'
    })


});

app.run(function ($rootScope, $location, $window) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    });
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    });

    $rootScope.$on('$routeChangeStart', function(evt, absNewUrl, absOldUrl){
        $window.scrollTo(0,0);    //scroll to top of page after each route change
    });
});



