
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