app.controller('navCtrl', function ($scope,$http) {
   $scope.message = "Hello Nav";
   console.log("nav controller");
   $http.get("http://localhost:53724/api/categories/Getcategories")
   .then(function (response) {
        console.log(response)
         $scope.categories = response.data;
    }, function(err){
    	console.log(err)
    });
});

       
        