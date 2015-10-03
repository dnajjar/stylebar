'use strict';

var app = angular.module('app', ['ui.bootstrap', 'ui.router']);

app.config(function ($stateProvider, $locationProvider) {

    //$locationProvider.html5Mode(true);

    var defaultOnEnter = function () {
        return;
    };
    var defaultOnExit = function () {
        return
    };
    var viewDirectory = './app/views/';

    var defineState = function (name, state) {
        if (!state.onEnter) state.onEnter = defaultOnEnter;
        if (!state.onExit) state.onExit = defaultOnExit;
        //if (!state.templateFile && !state.template && !state.templateUrl) state.templateFile = name + ".html";
        //if (!state.controller) state.controller = name;
        if (state.templateFile) state.templateUrl = viewDirectory + state.templateFile;
        $stateProvider.state(name, state);
    };

    $stateProvider
      .state('app', {
        url: '',
        abstract: true,
        template: '<div ui-view></div>'
    }).

    state('app.home', {
        url: '/home',
        templateUrl: viewDirectory + 'home.html',
        controller: 'HomeController',
        controllerAs: 'homectrl'
    })

    .state('app.clothes', {
        url: '/clothes',
        templateUrl: viewDirectory + 'clothes.html',
        controller: 'ClothesController',
        controllerAs: 'clothesctrl'
    })


    .state('provider', {
        url: '/provider',
        //templateFile: 'provider.html',
        //controller: 'ProviderController',
        //controllerAs: 'providerctrl'.
        views: {
            '':{
                templateUrl: viewDirectory + 'provider.html',
                controller: 'ProviderController',
                controllerAs: 'providerctrl'
            },
            'account@provider':{
                templateUrl: viewDirectory + 'provider-account.html',
            },
            'order@provider':{
                templateUrl: viewDirectory + 'provider-order.html',
            }
          }
    });

});

app.run(function ($rootScope, $location) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    });
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    });
});



