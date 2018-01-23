app.controller('productsCtrl', function ($scope, myService, $stateParams) {
	$scope.getproductbycategory = function (categoryidpassed) {
	        // var alldetailsforlogin = $scope.;        
	        var promiseGetSingle = myService.fetchproducts(categoryidpassed).then(function (response) {
	      		console.log(response)
	      		$scope.products = response.data	           
	        },function (err) {
	             console.log("ERROR" + err);
	             $scope.credentialserror = "couldn't find";
	            }
	        );
	    }
	    $scope.getproductbycategory($stateParams.type ? $stateParams.type : 1);
	});
