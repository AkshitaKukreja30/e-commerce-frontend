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


// $scope.init = function(){
// 	$http.get("http://localhost:53724/api/categories/Getcategories")
//    .then(function (response) {
//         console.log(response)
//          $scope.categories = response.data;
//     }, function(err){
//     	console.log(err)
//     });
// };



$scope.addproduct = function () {

	       var addedproduct={
	       		'name': $scope.addedproduct.name,
	       		'Description': $scope.addedproduct.description ,
	       		'unit_price':$scope.addedproduct.unitprice,
	       		'category_id':$scope.addedproduct.cid,
	       		'quantity':$scope.addedproduct.qty,
	       		'imgofproduct':$scope.addedproduct.url

	       };
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
	            

	       
	           
	        

	    