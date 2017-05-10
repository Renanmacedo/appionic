angular.module('starter')
    .controller('listaCtrl',function($scope,$ionicSideMenuDelegate, CarroService, $http){
        CarroService.obterCarros().then(function(dados){
            $scope.listaCarros = dados;
        });
        $scope.showHide = function(){
            $ionicSideMenuDelegate.toggleLeft();
        };
    });
angular.module('starter')
    .controller('carroEscolhidoCtrl', function($scope, $stateParams){
    $scope.carroEscolhido = angular.fromJson($stateParams.carro);
    
    $scope.listaAcessorios = [{"nome":"Airbeg", "preco":900}, {"nome": "Freio ABS", "preco":800}];
    $scope.acessorioMarcado = function(acessorio, isMarcado){
        if(isMarcado){
            $scope.carroEscolhido.preco += acessorio.preco;
        }else{
            $scope.carroEscolhido.preco -=  acessorio.preco;
        }
    }
 });
 angular.module('starter')
  .controller('finalizarPedidoCtrl',function($stateParams, $scope, $ionicPopup, $state,CarroService){
      $scope.pedido = {};
      $scope.finalizado = angular.fromJson($stateParams.carroEscolhido);
      $scope.showConfirm = function(){
        var pedidoFinalizado = {
            params: {
                carro: $scope.finalizado.nome,
                preco: $scope.finalizado.preco,
                nome: $scope.pedido.nome,
                endereco: $scope.pedido.endereco,
                email: $scope.pedido.email
            }
        }

        CarroService.salvarPedido(pedidoFinalizado).then(function(){    
            var confirm = $ionicPopup.alert({
                title: 'Pedido confirmado com sucesso !',
                template:'Em breve você receberá um e-mail com a confirmação'
            }).then(function(){
                $state.go('listagem');
             });
        });
    };
  });
  angular.module('starter')
    .controller('LoginCtrl',function($scope, $ionicPopup, $state){
        $scope.login = {};
        $scope.email = 'teste@teste.com';
        $scope.senha = 'teste123';
        $scope.realizarLogin = function(){
            var dadosLogin = {
                params: {
                    email: $scope.login.email,
                    senha: $scope.login.senha
                }
            }
            if($scope.senha == dadosLogin.params.senha
                && $scope.email == dadosLogin.params.email){
                    $state.go("app.listagem");
            }else{
                $ionicPopup.alert({
                    title: 'Ocorreu um erro',
                    template:  'Senha ou Email incorretos'
                });
            }
        }

    })