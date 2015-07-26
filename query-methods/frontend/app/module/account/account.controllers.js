'use strict';

angular.module('app.account.controllers', [])
    .config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('login', {
                    url: 'login',
                    controller: 'LoginController',
                    templateUrl: 'account/login-view.html',
                });
        }
    ])
    .controller('LoginController', [function() {
            console.log('Rendering login form.');
        }]);

