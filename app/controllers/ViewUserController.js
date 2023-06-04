app.controller('ViewUserController', function ($scope, $http, $routeParams) {
    $scope.user = null;

    // Fetch user details from the mock API
    $http.get('https://645d505de01ac61058a21cb1.mockapi.io/users/' + $routeParams.id)
      .then(function (response) {
        $scope.user = response.data;
      })
      .catch(function (error) {
        console.log('Error fetching user details:', error);
      });
  });