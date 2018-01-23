app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	    $urlRouterProvider.otherwise('/');
	    $stateProvider
	        .state('app', {
	            url: '/',
	            views: {
	                'header': {
	                    templateUrl: './views/nav.html',
	                    controller: 'navCtrl'
	                },
	                'content': {
	                    templateUrl: './views/home.html',
	                    controller: 'homeCtrl'
	                }
	            }
	        })
	    $stateProvider
	        .state('app.cart', {
	            url: 'cart',
	            views: {
	                'content@': {
	                    templateUrl: './views/cart.html',
	                    controller: 'cartCtrl'
	                }
	            }
	        })

	    $stateProvider
	        .state('app.contact', {
	            url: 'contact',
	            views: {
	                'content@': {
	                    templateUrl: './views/contact.html',
	                    controller: 'contactsCtrl'
	                }
	            }
	        })


            $stateProvider
	        .state('app.admin', {
	            url: 'admin',
	            views: {
	                'content@': {
	                    templateUrl: './views/admin.html',
	                    controller:'adminCtrl'
	                    // controller: 'adminCtrl'
	                }
	            }
	        })

	        $stateProvider
	        .state('app.products', {
	            url: 'product/:type',
	            views: {
	                'content@': {
	                    templateUrl: './views/product.html',
	                    controller: 'productsCtrl'
	                }
	            }
	        })

            
             $stateProvider
	        .state('app.adddetails', {
	            url: 'adddetails',
	            views: {
	                'content@': {
	                    templateUrl: './views/adddetails.html',
	                    controller:'adddetailsCtrl'
	                    // controller: 'adminCtrl'
	                }
	            }
	        })


	        
              

	        //  $stateProvider
	        // .state('app.drama', {
	        //     url: 'Drama',
	        //     views: {
	        //         'content@': {
	        //             templateUrl: './views/product.html',
	        //             controller: 'productsCtrl'
	        //         }
	        //     }
	        // })


	       $locationProvider.html5Mode(true)

})

