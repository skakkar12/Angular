mainApp.controller("studentController", function () {
    $scope.student = {
        firstname: "Mahesh",
        lastname: "Parashar",
        fees: 500,

        subjects: [
            { name: 'Physics', marks: 70 },
            { name: 'Physics', marks: 70 },
            { name: 'Physics', marks: 70 },
            { name: 'Physics', marks: 70 },
        ],

        fullName: function () {
            var studentObject;
            studentObject = $scope.student;
            return studentObject.firstname + " " + studentObject.lastname;
        }

    };

});