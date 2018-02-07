	
app.controller('homeCtrl', function ($scope, $http,myService) {
   			// $http.get('data/test.json').then(function(res){
   				console.log("inside home controller");
   			// })							
            $scope.getallproducts = function() {
        // var alldetailsforlogin = $scope.;        
        var promiseGetSingle = myService.allproducts().then(function(response) {
            //console.log(response)
            $scope.alltheproducts = response.data;
            $scope.allproductnames=[];
            for(var p in $scope.alltheproducts)
            {
                $scope.allproductnames.push($scope.alltheproducts[p].name);
                            }
            
           console.log($scope.allproductnames);

           $scope.complete = function(string){  
           $scope.hidethis = false;  
           var outputarray = [];  
            console.log(string.includes('A'));
            console.log(angular.lowercase(string).includes('a'));
            angular.forEach($scope.allproductnames, function(productname){  

               var stringinlowercase=angular.lowercase(string);
               var productnameinlowercase=angular.lowercase(productname);
               console.log("in lower case");
               
               console.log(productnameinlowercase.includes(stringinlowercase));

                 if(productnameinlowercase.includes(stringinlowercase))
                 outputarray.push(productname); 
                 if(string.length==0)
                 $scope.hidethis=true;

                                    
           });  

           $scope.filterproducts = outputarray;  
           console.log($scope.filterproducts)
           //console.log($scope.products);
      }  

      $scope.fillTextbox = function(string){  
           $scope.productname = string;  
           $scope.hidethis = true;  

           
      }  

        }, function(err) {
            console.log("ERROR" + err);
            $scope.credentialserror = "couldn't find";
        });
    }

    $scope.getallproducts();
           
            
        });