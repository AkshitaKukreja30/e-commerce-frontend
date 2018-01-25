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
	        .state('app.bill', {
	            url: 'bill',
	            views: {
	                'content@': {
	                    templateUrl: './views/bill.html',
	                    controller: 'cartCtrl'
	                }
	            }
	        })

             $stateProvider
	        .state('app.detailsofcustomer', {
	            url: 'detailsofcustomer',
	            views: {
	                'content@': {
	                    templateUrl: './views/detailsofcustomer.html',
	                    controller: 'cartCtrl'
	                    
	                }
	            }
	        })


              $stateProvider
	        .state('app.finalpage', {
	            url: 'finalpage',
	            views: {
	                'content@': {
	                    templateUrl: './views/finalpage.html',
	                    controller: 'cartCtrl'
	                    
	                }
	            }
	        })


             $stateProvider
	        .state('app.test', {
	            url: 'test',
	            views: {
	                'content@': {
	                    templateUrl: './views/test.html',
	                    controller: 'productsCtrl'
	                    
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

