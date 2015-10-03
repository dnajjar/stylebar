'use strict';

var app = angular.module('app', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'firebase']);

app.config(function ($stateProvider, $httpProvider, $provide, $urlRouterProvider) {

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

    defineState('home', {
        url: '',
        templateFile: 'home.html',
        controller: 'HomeController',
        controllerAs: 'homectrl'
    });

});

app.run(function ($rootScope, $location) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    });
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    });
});



