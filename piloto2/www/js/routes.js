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
    .state('app.perfil',{
        url: '/perfil',
        views:{
            'menuContent':{
                templateUrl:  'templates/perfil.html',
                controller: 'perfilCtrl'
            }
        }
    })
    .state('app.listaUsuarios',{
        url: '/listaUsuarios',
        views: {
            'menuContent': {
                templateUrl: 'templates/listaUsuarios.html',
                controller:   'listaUsuariosCtrl'
            }
        }
    })
    .state('app.carroescolhido',{
        url: '/carroescolhido/:carro',
         views: {
             'menuContent':{
                templateUrl: 'templates/carroescolhido.html',
                controller: 'carroEscolhidoCtrl'
             }
         }
    })
    .state('app.finalizarpedido',{
        url:'/finalizarpedido/:carroEscolhido',
        views:{
            'menuContent':{
                templateUrl: 'templates/finalizarpedido.html',
                controller: 'finalizarPedidoCtrl'
            }
        }
    })
    .state('login',{
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    });
 });