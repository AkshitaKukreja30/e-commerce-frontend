	
app.controller('homeCtrl', function ($scope, $http) {
   			$http.get('data/test.json').then(function(res){
   				console.log(res)
   			})							
            $scope.message = "Hello Home";
           
            console.log("home controller")
        });