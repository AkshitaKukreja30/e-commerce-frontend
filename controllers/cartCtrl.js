app.controller('cartCtrl', function($scope, $http, $location) {
    //localStorage.getItem('cart');
    $scope.cartList = JSON.parse(localStorage.getItem('cart'));
    arrayforpid = [];
    $scope.sum = 0;
    $scope.cartList.forEach(function(item) {
        $scope.sum = $scope.sum + item['chosenProduct']['unitprice'] * item['qtyofeach']
    })


    for (var i = 0; i < $scope.cartList.length; i++) {
        arrayforpid[i] = $scope.cartList[i].chosenProduct.id;

    }

    $scope.arrayreturned = [];

    //  $scope.itemsToAdd = [{
    //    id: '',
    //    quantity: ''
    //  }];
$scope.leftinstock=0;

    $scope.buyItems = function() {

        $scope.message = [];
        $http.post('http://localhost:53724/api/products/FetchQuantity', arrayforpid).then(function(res) {
            console.log(res);
            $scope.arrayreturned = res.data;
            console.log($scope.arrayreturned);

            for (i = 0; i < $scope.cartList.length; i++) {
                for (j = 0; j < $scope.arrayreturned.length; j++) {
                    if ($scope.cartList[i]["chosenProduct"]["id"] == $scope.arrayreturned[j]["id"]) {
                        //console.log("Products match - id is ", res.data[j]["id"]);
                        console.log("Cart qty is", $scope.cartList[i]["qtyofeach"]);
                        console.log("Available (database) qty is", $scope.arrayreturned[j]["quantity"]);
                        $scope.leftinstock=$scope.arrayreturned[j]["quantity"];

                        if ($scope.cartList[i]["qtyofeach"] > $scope.arrayreturned[j]["quantity"]) {

                            $scope.message.push(
                            	"Only "+ $scope.leftinstock+" units of " + $scope.cartList[i]["chosenProduct"]["name"] + " are available."
                            	);
                            console.log($scope.message);
                            console.log($scope.isoutofstock);

                        }

                    }
                }

                console.log($scope.message.length);
                if ($scope.message.length == 0) {

                    $scope.isoutofstock = false;

                } else {
                    $scope.isoutofstock = true;
                    
                }
            }
            if($scope.isoutofstock == false)
            	$location.path('bill');

        })
    }



    $scope.placeorder = function() {
    	console.log('placeorder')
        $location.path('detailsofcustomer');
        

    }

 $scope.endit = function() {
    	
        $location.path('finalpage');
        localStorage.setItem("order", JSON.stringify($scope.cartList));
        $scope.yourorder=JSON.parse(localStorage.getItem('order'));
        debugger
        $scope.cartList=[];
        localStorage.setItem("cart", JSON.stringify($scope.cartList));
        
    }
    $scope.yourorder=JSON.parse(localStorage.getItem('order'));
     $scope.yourorder.forEach(function(item) {
        $scope.sum = $scope.sum + item['chosenProduct']['unitprice'] * item['qtyofeach']
    })


    // for(var i=0; i<$scope.cartList.length;i++)
    // {
    // 	console.log($scope.cartList[i].chosenProduct.id);

    // }

    console.log(arrayforpid);

    $scope.remove = function(index) {
    	$scope.isoutofstock = false;
    	$scope.message=[];
        $scope.cartList.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify($scope.cartList));
        console.log($scope.cartList);
    }

    $scope.decrease = function(index) {
    	$scope.isoutofstock = false;
    	$scope.message=[];
        $scope.chosen = $scope.cartList[index];
        if ($scope.chosen.qtyofeach > 1) {
            $scope.chosen.qtyofeach--;
           localStorage.setItem("cart", JSON.stringify($scope.cartList));

        } else {
            $scope.remove(index);
        }
        console.log($scope.chosen.qtyofeach);
    }

    $scope.addToSum = function(product) {
        debugger
        $scope.sum = ($scope.sum + (parseInt(product.chosenProduct.unitprice)) * (parseInt(product.qtyofeach)))
    }


});