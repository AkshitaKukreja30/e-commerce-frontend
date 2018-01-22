app.controller('adminCtrl', function ($scope,myService,$location) {

$scope.GetLoginDetail = function (foruserlogin) {

        var alldetailsforlogin = $scope.user;
        
        var promiseGetSingle = myService.checkLogin(alldetailsforlogin).then(function () {

            $scope.credentialserror = "Credentials match!";
            //localStorage.setItem('username', $scope.user.emailforlogin);
           // $scope.usernameTest = localStorage.getItem('username');
           // console.log($scope)
            alert("Credentials match!");
            
            $location.url('adddetails');
            //$cookies.putObject('user', alldetailsforlogin);
           
        }
            ,
            function (err) {
                console.log("ERROR" + err);
                $scope.credentialserror = "Incorrect Username/Password";
                alert("Incorrect Username/Password");

            }
        );
    }
});
























http://localhost:53724/api/registerations/Getregisteration2?"email=akshita@gmail.com&password=12345
this.checkLogin = function (foruserlogin) {

        return $http.get("/api/RegistrationDetails/GetRegistrationDetail2?username=" + foruserlogin.UserNameForLogin
            + "&password=" + foruserlogin.PasswordForLogin);
    };

