app.controller('UserListController', function ($scope, $http) {
    $scope.users = [];
    $scope.loading = true;
    // Fetch users from the mock API
    $http.get('https://645d505de01ac61058a21cb1.mockapi.io/users')
      .then(function (response) {
        $scope.users = response.data;
        $scope.loading = false;
      })
      .catch(function (error) {
        console.log('Error fetching users:', error);
        $scope.loading = false;
      });

    $scope.deleteUser = function (user) {
      $scope.loading = true;
      $http.delete('https://645d505de01ac61058a21cb1.mockapi.io/users/' + user.id)
        .then(function (response) {
          var index = $scope.users.indexOf(user);
          if (index > -1) {
            $scope.users.splice(index, 1);
          }
        }).then(function () {
          $scope.loading = false;
        })
        .catch(function (error) {
          console.log('Error deleting user:', error);
        });
    };

  });