app.controller('productsCtrl', function($scope, myService, $stateParams) {
	if(localStorage.getItem('cart')){
		var cartList = JSON.parse(localStorage.getItem('cart'))
		$scope.forcartitems=JSON.parse(localStorage.getItem('cart'))
	}else{
		var cartList = [];
		$scope.forcartitems=[];
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
    var qtyofeachfordisplay=0;
    $scope.addedtocartmessage=[];
    

    $scope.addtocart = function(index) {
    	

    	$scope.chosen = $scope.products[index];

        console.log($scope.chosen.quantity);
	        for(var i=0;i<cartList.length;i++)
	          {
		     $scope.addedtocartmessage[i]=false;
	          }

        var alreadyincart = false;
        for (var i = 0; i < cartList.length; i++) {
            if (cartList[i].chosenProduct.id == $scope.chosen.id) {
                cartList[i].qtyofeach++;
                $scope.forcartitems[i].qtyofeachfordisplay++;        
                console.log(cartList[i].qtyofeach);
                console.log("checking for quantity");
                console.log($scope.forcartitems[i].qtyofeachfordisplay);
                alreadyincart = true;
                $scope.addedtocartmessage[index]=true;
                console.log($scope.addedtocartmessage[i]);
                               break;
           }
        }
        if (alreadyincart == false) {
            var cartObject = {
                'chosenProduct': $scope.chosen,
                'qtyofeach': 1
            }

            var cartObject2 = {
                'chosenProduct': $scope.chosen,
                'qtyofeachfordisplay': 1
            }



            cartList.push(cartObject);
            $scope.forcartitems.push(cartObject2);
            $scope.addedtocartmessage[index]=true;
            console.log($scope.addedtocartmessage);

        }
        localStorage.setItem("cart",JSON.stringify(cartList));
        //localStorage.setItem("cart",JSON.stringify($scope.forcartitems));
        console.log("final");
        console.log($scope.addedtocartmessage);


    }
     
    console.log(JSON.parse(localStorage.getItem('cart')));
    for(var i=0;i<cartList.length;i++)
    {
    console.log(cartList[0].chosenProduct.unitprice);
    }


});


