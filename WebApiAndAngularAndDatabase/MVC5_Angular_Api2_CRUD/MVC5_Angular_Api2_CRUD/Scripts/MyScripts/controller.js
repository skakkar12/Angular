/// <reference path="../angular-animate.min.js" />
/// <reference path="../angular-animate.js" />
/// <reference path="../angular.js" />
/// <reference path="../angular.min.js" />     
/// <reference path="../angular-animate.js" />     
/// <reference path="../angular-animate.min.js" />     

var app;
(function () {
    app = angular.module("RESTClientModule", ['ngAnimate']);
})()

app.controller("AngularJs_ManageEmployeeInfoController", function ($scope, $timeout, $rootScope, $window, $http) {
    $scope.date = new Date();
    $scope.empNameSearch = "";
    $scope.empCountrySearch = "";
    $scope.ManagerNameSearch = "";  


    $scope.ManageEMP_Info = false;
    $scope.ListEmployee = true;
    $scope.searchEmployee = true;


    $scope.EmpIds = 0;
    $scope.empName = "";
    $scope.empEmail = "";
    $scope.empCountry = "";
    $scope.empManager = "";  


    getEmployeeList($scope.empNameSearch, $scope.empCountrySearch, $scope.ManagerNameSearch);  

    function getEmployeeList(Employeename, Country, ManagerName) {
        $http.get('api/ManageEmployee/', { params: { emp_Name: EmployeeName, country: Country, managerName: ManagerName } }).success(function (data) {
            $scope.Employees = data;
            $scope.ManageEMP_Info = false;
            $scope.ListEmployee = false;
            $scope.searchEmployee = true;
            if ($scope.Employees.length > 0) {

            }

        })
            .error(function () {
                $scope.error = "Some error";
            });
    }


    $scope.searchEmployee = function () {

        getEmployeeList($scope.empNameSearch, $scope.empCountrySearch, $scope.ManagerNameSearch);  
    }

    $scope.editEmployeeInfo = function editEmployeeInfo(Employee_ID, Name, Email, Country, ManagerName) {
        cleardetails();
        $scope.EmpIds = Employee_ID;
        $scope.empName = Name
        $scope.empEmail = Email;
        $scope.empCountry = Country;
        $scope.empManager = ManagerName;

        $scope.ManageEMP_Info = true;
        $scope.ListEmployee = true;
        $scope.searchEmployee = true;
    }  

    $scope.Employee_Delete = function Employee_Delete(EmpIds, Name) {
        cleardetails();
        $scope.EmpIds = EmpIds;
        var delConfirm = confirm("Are you sure you want to delete the Employee " + Name + " ?");
        if (delConfirm == true) {

            $http.get('/api/ManageEmployee/deleteEmployee/', { params: { emp_ID: $scope.EmpIds } }).success(function (data) {
                alert("Employee Deleted Successfully!!");
                cleardetails();
                $scope.empNameSearch = "";
                $scope.empCountrySearch = "";
                $scope.ManagerNameSearch = "";
                getEmployeeList($scope.empNameSearch, $scope.empCountrySearch, $scope.ManagerNameSearch);
            })
                .error(function () {
                    $scope.error = "Some Error.";
                });

        }
    }

    $scope.AddEmployeeForm = function () {
        cleardetails();
        $scope.ManageEMP_Info = true;
        $scope.ListEmployee = true;
        $scope.searchEmployee = true;
    }

    function cleardetails() {
        $scope.EmpIds = 0;
        $scope.empName = "";
        $scope.empEmail = "";
        $scope.empCountry = "";
        $scope.empManager = "";
    }  

    //Form Validation  
    $scope.Message = "";
    $scope.IsFormSubmitted = false;
    $scope.IsFormValid = false;
    $scope.$watch("f1.$valid", function (isValid) {
        $scope.IsFormValid = isValid;
    });

    //Save-Edit Employee  
    $scope.
        = function () {

        $scope.IsFormSubmitted = true;
        if ($scope.IsFormValid) {
            if ($scope.EmpIds == 0) {
                $http.get('/api/ManageEmployee/addNewEmployee/', { params: { emp_Name: $scope.empName, email: $scope.empEmail, country: $scope.empCountry, managerName: $scope.empManager } }).success(function (data) {
                    alert("Employee Added Successfully.");
                    cleardetails();
                    $scope.empNameSearch = "";
                    $scope.empCountrySearch = "";
                    $scope.ManagerNameSearch = "";
                    getEmployeeList($scope.empNameSearch, $scope.empCountrySearch, $scope.ManagerNameSearch);

                })
                    .error(function () {
                        $scope.error = "Some Error.";
                    });
            }
            else {
                $http.get('/api/ManageEmployee/updateEmployee/', { params: { emp_ID: $scope.EmpIds, emp_Name: $scope.empName, email: $scope.empEmail, country: $scope.empCountry, managerName: $scope.empManager } }).success(function (data) {

                    alert("Employee Updated Successfully");
                    cleardetails();
                    $scope.empNameSearch = "";
                    $scope.empCountrySearch = "";
                    $scope.ManagerNameSearch = "";
                    getEmployeeList($scope.empNameSearch, $scope.empCountrySearch, $scope.ManagerNameSearch);

                })
                    .error(function () {
                        $scope.error = "Some Error.";
                    });
            }

        }
        else {
            $scope.Message = "All the fields are required.";
        }
    }
});