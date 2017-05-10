angular.module('starter')
    .controller('listaCtrl',function($scope,$ionicSideMenuDelegate){
        $scope.listaCarros = [{
          "modelo": "BMW - Sport",
          "codigo": 199,
          "valor": 33934  
        },{
         "modelo": "FERRARI - Sport",
          "codigo": 199,
          "valor": 102303
        },{
            "modelo": "POSH - XSAUTO",
            "codigo": 199,
            "valor": 339423
        }
        ];
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
            $scope.carroEscolhido.valor += acessorio.preco;
        }else{
            $scope.carroEscolhido.valor -=  acessorio.preco;
        }
    }
 });