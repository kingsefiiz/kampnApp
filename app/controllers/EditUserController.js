app.controller('EditUserController', function ($scope, $http, $routeParams, $location) {
    $scope.user = {};
    // Fetch user details from the mock API
    $http.get('https://645d505de01ac61058a21cb1.mockapi.io/users/' + $routeParams.id)
      .then(function (response) {
        $scope.user = response.data;
      })
      .catch(function (error) {
        console.log('Error fetching user details:', error);
      });

    $scope.updateUser = function () {
      $http.put('https://645d505de01ac61058a21cb1.mockapi.io/users/' + $routeParams.id, $scope.user)
        .then(function (response) {
          $location.path('/users');
        })
        .catch(function (error) {
          console.log('Error updating user:', error);
        });
    };
  });