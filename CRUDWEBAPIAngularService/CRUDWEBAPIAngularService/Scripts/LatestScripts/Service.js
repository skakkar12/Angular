app.service('crudService', function ($http) {

    this.post = function (Employee) {
        var request = $http({
            method: "post",
            url: "/api/EmployeeRs",
            data: Employee
        });
        return request;
    }


    this.get = function (EmpNo) {
        return $http.get("/api/EmployeeRs/" + EmpNo);
    }

    //Get All Employees
    this.getEmployees = function () {
        return $http.get("/api/EmployeeRs");
    }


    //Update the Record
    this.put = function (EmpNo, Employee) {
        var request = $http({
            method: "put",
            url: "/api/EmployeeRs/" + EmpNo,
            data: Employee
        });
        return request;
    }
    //Delete the Record
    this.delete = function (EmpNo) {
        var request = $http({
            method: "delete",
            url: "/api/EmployeeRs/" + EmpNo
        });
        return request;
    }

});