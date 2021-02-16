var app = angular.module("mainModule", []);

app.controller("mycontroller", function ($scope, $http) {
    $http.get("EmployeeService.asmx/GetAllEmployees")
        .then(function (response) {
            $scope.employees = response.data;
        });
});

