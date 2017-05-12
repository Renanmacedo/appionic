 angular.module('starter')
  .controller('finalizarPedidoCtrl',function($stateParams, $scope, $ionicPopup, $state,CarroService, $ionicHistory){
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
            $ionicHistory.nextViewOptions({
                disableBack: true
            })  
            var confirm = $ionicPopup.alert({
                title: 'Pedido confirmado com sucesso !',
                template:'Em breve você receberá um e-mail com a confirmação'
            }).then(function(){
                $state.go('app.listagem');
             },function(erro){
                alert(erro);
             });
        });
    };
  });