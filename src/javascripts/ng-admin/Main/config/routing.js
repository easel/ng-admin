/*global define*/

define(function (require) {
    'use strict';

    var layoutTemplate = require('text!../view/layout.html'),
        dashboardTemplate = require('text!../view/dashboard.html');

    function routing($stateProvider, $urlRouterProvider) {

        $stateProvider.state('main', {
            abstract: true,
            controller: 'AppController',
            controllerAs: 'appController',
            templateProvider: ['NgAdminConfiguration', function(Configuration) {
                return Configuration().layout() || layoutTemplate;
            }]
        });

        $stateProvider.state('admin.dashboard', {
            parent: 'main',
            url: '/admin/dashboard?sortField&sortDir',
            params: {
                sortField: null,
                sortDir: null
            },
            controller: 'DashboardController',
            controllerAs: 'dashboardController',
            template: dashboardTemplate
        });
    }

    routing.$inject = ['$stateProvider', '$urlRouterProvider'];

    return routing;
});
