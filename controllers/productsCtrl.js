app.controller('productsCtrl', function($scope, myService, $stateParams) {
	if(localStorage.getItem('cart')){
		var cartList = JSON.parse(localStorage.getItem('cart'))
	}else{
		var cartList = [];
	}
    $scope.getproductbycategory = function(categoryidpassed) {
        // var alldetailsforlogin = $scope.;        
        var promiseGetSingle = myService.fetchproducts(categoryidpassed).then(function(response) {
            console.log(response)
            $scope.products = response.data
        }, function(err) {
            console.log("ERROR" + err);
            $scope.credentialserror = "couldn't find";
        });
    }
    $scope.getproductbycategory($stateParams.type ? $stateParams.type : 1);
    
    var qtyofeach = 0;
    $scope.addtocart = function(index) {
        $scope.chosen = $scope.products[index];
        console.log($scope.chosen);
        console.log(qtyofeach);

        var alreadyincart = false;

        for (var i = 0; i < cartList.length; i++) {
            if (cartList[i].chosenProduct.id == $scope.chosen.id) {
                cartList[i].qtyofeach++;
                console.log(cartList[i].qtyofeach);
                alreadyincart = true;
                break;

            }
        }

        if (alreadyincart == false) {
            var cartObject = {

                'chosenProduct': $scope.chosen,
                'qtyofeach': 1
            }
            cartList.push(cartObject);
        }

        console.log(cartList);
        localStorage.setItem("cart",JSON.stringify(cartList))
    }

});
