app.controller('productsCtrl', function($scope, myService, $stateParams) {
    if (localStorage.getItem('cart')) {
        $scope.cartList = JSON.parse(localStorage.getItem('cart'))
        //$scope.forcartitems=JSON.parse(localStorage.getItem('cart'))
    } else {
        $scope.cartList = [];
        //$scope.forcartitems=[];
    }

    var qtyofeach = 0;
    var qtyfordisplay = 0;
    $scope.addedtocartmessage = [];
    $scope.qtyarray = [];







    $scope.getproductbycategory = function(categoryidpassed) {
        // var alldetailsforlogin = $scope.;        
        var promiseGetSingle = myService.fetchproducts(categoryidpassed).then(function(response) {
            console.log(response)
            $scope.products = response.data
            //$scope.cartList = JSON.parse(localStorage.getItem('cart'))
            //localStorage.setItem("cart",JSON.stringify($scope.cartList));

            //$scope.cartList=[];
            $scope.qtyarray = new Array($scope.cartList.length);
            // for(var j=0;j<$scope.qtyarray.length;j++)
            // {
            // $scope.qtyarray.qtyfordisplay[j]=0;
            // }
            // qtyfordisplay=0;


        }, function(err) {
            console.log("ERROR" + err);
            $scope.credentialserror = "couldn't find";
        });
    }
    $scope.getproductbycategory($stateParams.type ? $stateParams.type : 1);



    $scope.addtocart = function(index) {


        $scope.chosen = $scope.products[index];

        console.log($scope.chosen.quantity);
        for (var i = 0; i < $scope.cartList.length; i++) {
            $scope.addedtocartmessage[i] = false;
            //$scope.qtyarray[i].qtyfordisplay=0;
        }

        var alreadyincart = false;
        for (var i = 0; i < $scope.cartList.length; i++) {
            if ($scope.cartList[i].chosenProduct.id == $scope.chosen.id) {
                $scope.cartList[i].qtyofeach++;
                //$scope.qtyarray[index]=$scope.cartList[index].qtyofeach;
                $scope.qtyarray[i].qtyfordisplay++;
                //$scope.forcartitems[i].qtyofeach++;        
                console.log($scope.cartList[i].qtyofeach);
                console.log("checking for quantity");
                //console.log($scope.forcartitems[index].qtyofeach);
                alreadyincart = true;
                $scope.addedtocartmessage[index] = true;
                console.log($scope.addedtocartmessage[i]);
                break;
            }
        }
        if (alreadyincart == false) {
            var cartObject = {
                'chosenProduct': $scope.chosen,
                'qtyofeach': 1
            }

            var newobjectforqty = {
                'qtyfordisplay': 1
            }
            $scope.cartList.push(cartObject);
            //$scope.forcartitems.push(cartObject);
            $scope.addedtocartmessage[index] = true;
            $scope.qtyarray.push(newobjectforqty);
            console.log($scope.addedtocartmessage);

        }
        localStorage.setItem("cart", JSON.stringify($scope.cartList));
        //localStorage.setItem("cart",JSON.stringify($scope.forcartitems));
        console.log("final");
        console.log($scope.addedtocartmessage);
        console.log("this should work");
        console.log($scope.qtyarray[index]);
        debugger


    }

    console.log(JSON.parse(localStorage.getItem('cart')));
    for (var i = 0; i < $scope.cartList.length; i++) {
        console.log($scope.cartList[0].chosenProduct.unitprice);
    }


});