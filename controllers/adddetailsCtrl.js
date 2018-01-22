	app.controller('adddetailsCtrl', function ($scope,myService) {

	$scope.addcategory = function () {

	       var addedcategory=$scope.addedcategory;
	       console.log(addedcategory);
	       myService.post(addedcategory).then(function () {

	       $scope.credentialserror = "successfully added";
	             //localStorage.setItem('username', $scope.user.emailforlogin);
	            // $scope.usernameTest = localStorage.getItem('username');
	            // console.log($scope)
	             alert("successful");

	            //$cookies.putObject('user', alldetailsforlogin);
	           
	         }
	             ,
	             function (err) {
	                 console.log("ERROR" + err);
	                 $scope.credentialserror = "unsuccessful";
	                alert("unsuccessful");

	           }
	        );
	        }         



$scope.addproduct = function () {

	       var addedproduct=$scope.addedproduct;
	       console.log(addedproduct);
	       myService.postproduct(addedproduct).then(function () {

	       $scope.credentialserror = "successfully added";
	             //localStorage.setItem('username', $scope.user.emailforlogin);
	            // $scope.usernameTest = localStorage.getItem('username');
	            // console.log($scope)
	             alert("successful");

	            //$cookies.putObject('user', alldetailsforlogin);
	           
	         }
	             ,
	             function (err) {
	                 console.log("ERROR" + err);
	                 $scope.credentialserror = "unsuccessful";
	                alert("unsuccessful");

	           }
	        );
	        }        





















	});
	            

	       
	           
	        

	    