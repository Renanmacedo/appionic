angular.module('starter')
    .controller('listaCtrl',function($scope,$ionicSideMenuDelegate){
        $scope.listaCarros = [{
          modelo: "BMW - Sport",
          codigo: 199  
        },{
          modelo: "FERRARI - Sport",
          codigo: 344
        },{
            modelo: "POSH - XSAUTO",
            codigo: 999
        }
        ];
        $scope.showHide = function(){
            $ionicSideMenuDelegate.toggleLeft();
        };
    });