angular.module("starter")
 .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("listagem");
    $stateProvider
    .state('listagem',{
        url:"/listagem",
        templateUrl: "templates/listagem.html",
        controller: "listaCtrl" 
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
    });
 });