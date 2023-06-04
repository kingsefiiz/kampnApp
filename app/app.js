var app = angular.module('userApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/users', {
      templateUrl: 'views/users.html',
      controller: 'UserListController'
    })
    .when('/user/:id', {
      templateUrl: 'views/view-user.html',
      controller: 'ViewUserController'
    })
    .when('/add-user', {
      templateUrl: 'views/add-user.html',
      controller: 'AddUserController'
    })
    .when('/edit-user/:id', {
      templateUrl: 'views/edit-user.html',
      controller: 'EditUserController'
    })
    .otherwise({
      redirectTo: '/users'
    });
});
