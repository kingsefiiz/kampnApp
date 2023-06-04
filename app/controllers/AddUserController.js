app.controller('AddUserController', function ($scope, $http, $location) {
    $scope.newUser = {};

    $scope.addUser = function () {
      $http.post('https://645d505de01ac61058a21cb1.mockapi.io/users', $scope.newUser)
        .then(function (response) {
          $location.path('/users');
        })
        .catch(function (error) {
          console.log('Error adding user:', error);
        });
    };
  });