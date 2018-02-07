app.service('myService', function ($http) {

this.checkLogin = function (foruserlogin) {

        return $http.get("http://localhost:53724/api/registerations/Getregisteration2?email=" + 
        	foruserlogin.emailforlogin +"&password=" + foruserlogin.passwordforlogin);
        	
        	    };


this.post = function (categorydetails) {
        var request = $http({
            method: "post",
            url: "http://localhost:53724/api/categories/Postcategory",
            data: categorydetails

        });

        return request;
    }


this.postproduct = function (productdetails) {
        var request = $http({
            method: "post",
            url: "http://localhost:53724/api/products/Postproduct",
            data: productdetails

        });

        return request;
    }


this.fetchproducts= function(categoryidpassed)
{
  return  $http.get("http://localhost:53724/api/products/GetOurProduct?cid="+categoryidpassed);
}

this.allproducts=function()
{
   return  $http.get("http://localhost:53724/api/products/GetAllProducts"); 
}

});