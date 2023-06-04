var app = angular.module('userApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      templateUrl: '/app/views/users.html',
      controller: 'UserListController'
    })
    .when('/user/:id', {
      templateUrl: '/app/views/view-user.html',
      controller: 'ViewUserController'
    })
    .when('/add-user', {
      templateUrl: '/app/views/add-user.html',
      controller: 'AddUserController'
    })
    .when('/edit-user/:id', {
      templateUrl: '/app/views/edit-user.html',
      controller: 'EditUserController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
