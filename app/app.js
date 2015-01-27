var app = angular.module('charsApp', ['ngRoute', 'ngDialog', 'home.browse', 'home.addchar', 'home.chardata']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        controller: 'HomeBrowseController',
        templateUrl: '/pages/home/browse.view.html'
    })
    .when('/addchar', {
        controller: 'HomeAddCharController',
        templateUrl: '/pages/home/addchar.view.html'
    })
    .otherwise({
        redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
}]);
