app.controller('cartCtrl', function($scope, $http) {
    //localStorage.getItem('cart');
    $scope.cartList = JSON.parse(localStorage.getItem('cart'));
    console.log($scope.cartList);

    $scope.buyItems = function() {
        $http.post('api/buy-items', $scope.cartList).then(function(res) {
            console.log(res)
        })
    }

});