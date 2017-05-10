angular.module("starter")
 .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("login");
    $stateProvider
    .state('app',{
        url: '/app',
        templateUrl: 'templates/menu.html',
        abstract: true
    })
    .state('app.listagem',{
        url:"/listagem",
        views: {
            'menuContent':{
                templateUrl: "templates/listagem.html",
                controller: "listaCtrl" 
            }
        }
    })
    .state('carroescolhido',{
        url: '/carroescolhido/:carro',
        templateUrl: 'templates/carroescolhido.html',
        controller: 'carroEscolhidoCtrl'
    })
    .state('finalizarpedido',{
        url:'/finalizarpedido/:carroEscolhido',
        templateUrl: 'templates/finalizarpedido.html',
        controller: 'finalizarPedidoCtrl'
    })
    .state('login',{
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    });
 });